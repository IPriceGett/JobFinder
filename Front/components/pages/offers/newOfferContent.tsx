import React, { ChangeEvent, Fragment, useRef, useState } from "react";
import Header from "components/shared/header";
import useNewOffer from "hooks/newOffer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "components/generic/textInput";
import Button from "components/generic/button";

const newOfferContent = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedType, setSelectedType] = useState(0);
  const { handleUpload, schema, loading } = useNewOffer(
    selectedFile,
    selectedType
  );
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { title: "", desc: "", date: "" },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isFormValid = formState.isValid;

  const titleInput = (
    <TextInput
      name="title"
      label={"Titulo"}
      placeholder={"Titulo de la oferta"}
      maxLength={70}
      control={control}
    />
  );
  const descInput = (
    <TextInput
      name="desc"
      label={"Descripcion"}
      placeholder={"Descripcion de la oferta"}
      maxLength={16}
      control={control}
    />
  );

  const dateInput = (
    <TextInput
      name="date"
      label={"Fecha expiracion"}
      placeholder={"dd/mm/yyyy"}
      maxLength={16}
      control={control}
    />
  );

  const inputs = {
    title: titleInput,
    desc: descInput,
    date: dateInput,
  };

  return (
    <>
      <Header></Header>
      <div className="w-full justify-center flex bg-[#d9d9d9]">
        <div className="w-4/5 md:w-1/2 h-auto flex flex-col justify-around items-center mt-[30px] md:mt-[0px]">
          <form
            onSubmit={handleSubmit(handleUpload)}
            className="flex-1 w-full flex flex-col space-y-24 items-center justify-evenly my-[50px]"
          >
            <div className="flex flex-col justify-between w-full md:flex-row">
              <Fragment>{inputs["title"]}</Fragment>
              <Fragment>{inputs["desc"]}</Fragment>
            </div>
            <Fragment>{inputs["date"]}</Fragment>
            <div className="flex flex-col md:flex-row w-full items-center justify-between mt-[20px]">
              <div className="flex flex-col w-4/5 md:w-2/5 h-[150px] items-center justify-evenly rounded-[20px] p-[20px] bg-white">
                <span className="text-lg"> Busco a alguien</span>
                <input
                  type="radio"
                  onClick={() => {
                    setSelectedType(1);
                  }}
                ></input>
              </div>
              <div className="flex flex-col w-4/5 md:w-2/5 h-[150px] items-center justify-evenly rounded-[20px] p-[20px] bg-white mt-[20px] md:mt-[0px]">
                <span className="text-lg">Ofrezco mis servicios</span>
                <input
                  type="radio"
                  onClick={() => {
                    setSelectedType(2);
                  }}
                ></input>
              </div>
            </div>
            <Fragment>
              <div>
                <label className="relative block cursor-pointer">
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                    onChange={handleFileChange}
                  />
                  <div className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    {selectedFile
                      ? selectedFile.name
                      : "Selecciona imagen para tu oferta"}
                  </div>
                  {selectedFile && (
                    <div className="absolute top-0 right-0 mt-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer text-red-500 hover:text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={handleClearFile}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                </label>
              </div>
            </Fragment>
            <div className="hidden lg:block">
              <Button
                appearance="blue"
                size="medium"
                disabled={
                  !isFormValid || loading || !selectedFile || selectedType == 0
                }
                block
              >
                {loading ? "Publicando..." : "Publicar"}
              </Button>
            </div>

            <div className="flex lg:hidden">
              <Button
                appearance="blue"
                size="medium"
                disabled={
                  !isFormValid || loading || !selectedFile || selectedType == 0
                }
                block
              >
                {loading ? "Publicando..." : "Publicar"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default newOfferContent;
