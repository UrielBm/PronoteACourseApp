import React, { useContext, useState } from "react";
import useValidation from "../hooks/useValidation";
import { FirebaseContext } from "../firebase";
import FireUploader from "react-firebase-file-uploader";
import Router, { useRouter } from "next/router";
import {
  Formu,
  WrapperInputs,
  LabelForm,
  InputForm,
  SelectForm,
  WrapperError,
  ButtonForm,
  TextArea,
  FieldSet,
} from "./iu/Form";
import validationNewCourse from "../rules/validationNewCourse";
const FormNewCourse = () => {
  //State de la imagen
  const [nameImage, setNameImage] = useState("");
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urlImage, setUrlImage] = useState("");
  const [Error, SetError] = useState(false);
  const INITIAL_STATE = {
    courseName: "",
    author: "",
    category: "",
    urlCourse: "",
    date: "",
    description: "",
  };
  const {
    Values,
    Errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(INITIAL_STATE, validationNewCourse, handleCreatenewCourse);
  const {
    courseName,
    author,
    category,
    urlCourse,
    imageCourse,
    date,
    description,
  } = Values;
  const handleUploadStart = () => {
    setProgress(0);
    setUpload(true);
  };
  const handleProgress = (progress) => setProgress({ progress });
  const handleUploadError = (error) => {
    setUpload(error);
    console.log(error);
  };
  const handleUploadSuccess = (filename) => {
    setProgress(100);
    setUpload(false);
    setNameImage(filename);
    firebase.storage
      .ref("courses")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        setUrlImage(url);
      });
  };
  const { user, firebase } = useContext(FirebaseContext);
  const router = useRouter();
  async function handleCreatenewCourse() {
    try {
      // si el usuario no esta login lo mandamos ahí.
      if (!user) {
        router.push("/login");
      }
      //creando el objeto de curso
      const course = {
        courseName,
        author,
        category,
        urlImage,
        urlCourse,
        date,
        description,
        votes: 0,
        listVotes: [],
        comentaries: [],
        creation: Date.now(),
        creator: {
          id: user.uid,
          name: user.displayName,
        },
      };
      //insertar curso en la base de datos
      await firebase.db.collection("courses").add(course);
      return router.push("/");
    } catch (error) {
      SetError(error.message);
    }
  }
  return (
    <Formu onSubmit={handleSubmit}>
      <FieldSet>
        <legend>General Information</legend>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="courseName">Course's Name:</LabelForm>
            <InputForm
              type="text"
              placeholder="input a course's name"
              id="courseName"
              name="courseName"
              value={courseName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </WrapperInputs>
          {Errors.courseName && (
            <WrapperError>{Errors.courseName}</WrapperError>
          )}
        </div>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="author">Author:</LabelForm>
            <InputForm
              type="text"
              placeholder="Author"
              id="author"
              name="author"
              value={author}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </WrapperInputs>
          {Errors.author && <WrapperError>{Errors.author}</WrapperError>}
        </div>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="category">Category:</LabelForm>
            <SelectForm
              id="category"
              name="category"
              value={category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">--Select an option--</option>
              <option value="informatica">Informatica</option>
              <option value="psicologia">Psicologia</option>
              <option value="odontologia">Odontologia</option>
              <option value="arquitectura">Arquitectura</option>
              <option value="quimica">Quimica</option>
            </SelectForm>
          </WrapperInputs>
          {Errors.category && <WrapperError>{Errors.category}</WrapperError>}
        </div>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="urlCourse">Url:</LabelForm>
            <InputForm
              type="text"
              placeholder="url of Video, link on facebook, youtube"
              id="urlCourse"
              name="urlCourse"
              value={urlCourse}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </WrapperInputs>
          {Errors.urlCourse && <WrapperError>{Errors.urlCourse}</WrapperError>}
        </div>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="imageCourse">Course's Image:</LabelForm>
            <FireUploader
              accept="image/*"
              id="imageCourse"
              name="imageCourse"
              randomizeFilename
              storageRef={firebase.storage.ref("courses")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </WrapperInputs>
        </div>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="date">Date:</LabelForm>
            <InputForm
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </WrapperInputs>
          {Errors.date && <WrapperError>{Errors.date}</WrapperError>}
        </div>
      </FieldSet>
      <FieldSet>
        <legend>About your Course</legend>
        <div>
          <WrapperInputs>
            <LabelForm htmlFor="description">Description:</LabelForm>
            <TextArea
              placeholder="description about your course"
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </WrapperInputs>
          {Errors.description && (
            <WrapperError>{Errors.description}</WrapperError>
          )}
        </div>
      </FieldSet>
      {Error && <WrapperError>{Error}</WrapperError>}
      <ButtonForm>Create Course</ButtonForm>
    </Formu>
  );
};

export default FormNewCourse;
