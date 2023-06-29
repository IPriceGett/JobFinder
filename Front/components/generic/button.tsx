import { cloneElement, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

type Size = "small" | "medium" | "big";

type Appearance = "blue" | "gray" | "delete";

type Props = {
  children?: ReactNode | string;
  size: Size;
  appearance: Appearance;
  disabled?: boolean;
  icon?: ReactElement;
  block?: boolean;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  index?: number;
};

const Button = ({
  children,
  size,
  appearance,
  disabled,
  icon,
  block,
  className,
  style,
  href,
  index,
  onClick,
  ...rest
}: // eslint-disable-next-line sonarjs/cognitive-complexity
Props): JSX.Element => {
  const clonedIcon = icon
    ? cloneElement(icon, { size: iconSizeBySizeProp[size] })
    : null;
  const Component = href ? "a" : "button";

  const button = (
    <Component
      className={clsx(
        "rounded-full flex items-center min-w-0",
        clonedIcon && children ? "justify-start" : "justify-center",
        block && children ? "w-full" : null,
        disabled ? "opacity-50 cursor-not-allowed" : null,
        buttonBackgroundByAppearanceProp[appearance],
        disabled
          ? buttonBackgroundDisabledByAppearanceProp[appearance]
          : buttonBackgroundInteractionByAppearanceProp[appearance],
        disabled ? null : buttonTextInteractionByAppearanceProp[appearance],
        disabled ? null : borderInteractionByAppearanceProp[appearance],
        children ? buttonSpacingBySizeProp[size] : null,
        buttonHeightBySizeProp[size],
        clonedIcon && !children ? iconOnlyButtonWidthBySizeProp[size] : null,
        textColorByAppearanceProp[appearance],
        borderByAppearanceProp[appearance],
        className
      )}
      onClick={(e) => {
        disabled ? e.preventDefault() : onClick && onClick();
      }}
      style={style}
      {...rest}
    >
      {clonedIcon ? <div className="flex-none">{clonedIcon}</div> : null}
      {children ? (
        <p
          className={clsx(
            "truncate",
            textWeightBySizeProp[size],
            textSizeBySizeProp[size]
          )}
        >
          {children}
        </p>
      ) : null}
    </Component>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};

const buttonBackgroundByAppearanceProp: Record<Appearance, string> = {
  blue: "bg-blue-500",
  gray: "bg-gray-500",
  delete: "bg-red-500",
};

const buttonBackgroundDisabledByAppearanceProp: Record<Appearance, string> = {
  blue: "cursor-not-allowed",
  gray: "cursor-not-allowed",
  delete: "cursor-not-allowed",
};

const buttonBackgroundInteractionByAppearanceProp: Record<Appearance, string> =
  {
    blue: "hover:bg-blue-400 active:bg-blue-600",
    gray: "hover:bg-gray-400 active:bg-gray-600",
    delete: "hover:bg-red-400 active:bg-red-600",
  };

const buttonTextInteractionByAppearanceProp: Record<Appearance, string> = {
  blue: "hover:text-white active:text-white",
  gray: "hover:text-white active:text-white",
  delete: "hover:text-white active:text-white",
};

const textColorByAppearanceProp: Record<Appearance, string> = {
  blue: "text-white",
  gray: "text-white",
  delete: "text-white",
};

const borderByAppearanceProp: Record<Appearance, string> = {
  blue: "border bg-blue-500",
  gray: "border bg-gray-500",
  delete: "border bg-red-500",
};

const borderInteractionByAppearanceProp: Record<Appearance, string> = {
  blue: "hover:border-blue-400 active:border-blue-600",
  gray: "hover:border-gray-400 active:border-gray-600",
  delete: "hover:border-red-400 active:border-red-600",
};

const buttonSpacingBySizeProp: Record<Size, string> = {
  small: "px-8 space-x-8",
  medium: "px-16 space-x-16",
  big: "px-16 space-x-16",
};

const buttonHeightBySizeProp: Record<Size, string> = {
  small: "h-12",
  medium: "h-16",
  big: "h-60",
};

const iconOnlyButtonWidthBySizeProp: Record<Size, string> = {
  small: "w-32",
  medium: "w-44",
  big: "w-60",
};

const textSizeBySizeProp: Record<Size, string> = {
  small: "text-sm",
  medium: "text-lg",
  big: "text-xl",
};

const textWeightBySizeProp: Record<Size, string> = {
  small: "font-medium",
  medium: "font-semibold",
  big: "font-semibold",
};

const iconSizeBySizeProp: Record<Size, number> = {
  small: 16,
  medium: 22,
  big: 28,
};

export default Button;
