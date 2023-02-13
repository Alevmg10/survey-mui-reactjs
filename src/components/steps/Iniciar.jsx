import {TextFieldCustom}  from "../InputCustoms";


export default function Iniciar() {

  return (
    <>
      <TextFieldCustom label="Nombre" name="nombre" />
      <br />
      <br />
      <TextFieldCustom label="Apellido" name="apellido" />
      <br />
      <br />
      <TextFieldCustom label="Email" name="email" />
    </>
  );
}
