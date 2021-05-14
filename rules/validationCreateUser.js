export default function validationNewUser(Values) {
  let errores = {};

  if (!Values.name) {
    errores.name = "El name es necesario";
  }
  if (!Values.email) {
    errores.email = "El email es necesario";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Values.email)) {
    errores.email = "Email no valido";
  }
  // validacion de password
  if (!Values.password) {
    errores.password = "El password es necesario";
  } else if (Values.password.length < 6) {
    errores.password = "El password debe de ser al menos de 6 caracteres";
  }
  return errores;
}
