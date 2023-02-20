import {TextFieldCustom}  from "../InputCustoms";


export default function Iniciar() {

  return (
    <div className="flex flex-col items-center space-y-5"> 
      <h6 className="mt-4 h-6 text-gray-700 font-bold leading-8 text-lg mb-3">
        Ingrese sus datos para comenzar la encuesta
      </h6>
      <TextFieldCustom label="Nombre" name="nombre"  />
      <TextFieldCustom label="Apellido" name="apellido" />
      <TextFieldCustom label="Email" name="email" />
    </div>
  );
}
