export default function validationNewCourse(Values) {
  let errores = {};

  if (!Values.courseName) {
    errores.courseName = "El nombre del curso es necesario";
  }
  if (!Values.author) {
    errores.author = "El autor del curso es necesario";
  }
  if (!Values.category) {
    errores.category = "La categoria del curso es necesaria";
  }
  if (!Values.date) {
    errores.date = "La fecha del curso es necesaria";
  }
  if (!Values.description) {
    errores.description = "La descripción es necesaria";
  }
  if (!Values.urlCourse) {
    errores.urlCourse = "la url del curso es necesario";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(Values.urlCourse)) {
    errores.urlCourse = "Url no valida, favor de verificarla";
  }
  return errores;
}
