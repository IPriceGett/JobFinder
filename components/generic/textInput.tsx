import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import clsx from 'clsx'
import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from 'react'

type Props = {
  label?: string
  placeholder?: string
  error?: string
  formatter?: (value: string) => string
  type?: HTMLInputTypeAttribute
  icon?: ReactElement
  className?: string
  inputClassName?: string
  autoFocus?: boolean
  maxLength?: number
  list?: string
}

// Source: https://dev.to/texmeijin/component-design-idea-using-react-hook-form-v7-ie0
export type TextInputProps<T extends FieldValues> = Props & UseControllerProps<T>

const TextInput = <T extends FieldValues>({
  placeholder,
  name,
  label,
  control,
  formatter,
  type,
  error: propError,
  className,
  inputClassName,
  icon,
  list = '',
  ...rest
}: // eslint-disable-next-line sonarjs/cognitive-complexity
TextInputProps<T>): JSX.Element => {
  const { field, fieldState } = useController({ name, control })
  const error = propError || fieldState.error?.message

  const isValid = fieldState.isDirty && !fieldState.error


  const inputClassNames = clsx(
    isValid ? 'bg-green-500/10' : null,
    error ? 'bg-red-500/10' : null,
    !isValid && !error ? 'bg-white' : null
  )

  return (
    <div className={clsx(className, 'space-y-4')}>
      {label ? <p className="text-sm font-normal text-[#5f5f5f]">{label}</p> : null}
      <div className="flex bg-white h-1/2 rounded-md overflow-hidden relative">
        <input
          ref={field.ref}
          className={clsx(
            'w-full text-[#5f5f5f] font-medium h-full outline-none px-16 md:px-32',
            inputClassName,
            inputClassNames
          )}
          list={list}
          type={type}
          placeholder={placeholder}
          value={formatter ? formatter(field.value) : field.value}
          onChange={
            formatter ? (e: ChangeEvent<HTMLInputElement>) => field.onChange(formatter(e.target.value)) : field.onChange
          }
          {...rest}
        />
        {/* <div className="absolute right-0 w-40 h-40 flex items-center justify-center rounded-r-sm pointer-events-none">
          {isValid || error ? (
            isValid ? (
              <CheckOutlineIcon size={20} className={clsx('text-success')} />
            ) : (
              <CloseIcon size={20} className={clsx('text-error')} />
            )
          ) : null}
        </div> */}
      </div>
      <div className="flex items-center justify-between">
        <p className={clsx('block text-xs font-normal text-red-500 truncate mb-1', error ? 'opacity-100' : 'opacity-0')}>
          {error || 'error'}
        </p>
      </div>
    </div>
  )
}

export default TextInput