import React, { useState } from "react";
import useValidation from "../hooks/useValidation";
import validationNewUser from "../rules/validationCreateUser";
import firebase from "../firebase";
import Router from "next/router";
import {
  Formu,
  WrapperInputs,
  LabelForm,
  InputForm,
  WrapperError,
  ButtonForm,
} from "./iu/Form";
const FormCreateAcount = () => {
  const [Error, SetError] = useState(false);
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
  };
  const {
    Values,
    Errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(INITIAL_STATE, validationNewUser, handleCreateAcount);
  async function handleCreateAcount() {
    try {
      await firebase.createAcount(name, email, password);
      Router.push("/");
    } catch (error) {
      SetError(error.message);
    }
  }
  const { name, email, password } = Values;
  return (
    <Formu onSubmit={handleSubmit}>
      <div>
        <WrapperInputs>
          <LabelForm htmlFor="name">Name:</LabelForm>
          <InputForm
            type="text"
            placeholder="input your name"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </WrapperInputs>
        {Errors.name && <WrapperError>{Errors.name}</WrapperError>}
      </div>
      <div>
        <WrapperInputs>
          <LabelForm htmlFor="email">Email:</LabelForm>
          <InputForm
            type="email"
            placeholder="input your email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </WrapperInputs>
        {Errors.email && <WrapperError>{Errors.email}</WrapperError>}
      </div>
      <div>
        <WrapperInputs>
          <LabelForm htmlFor="password">Password:</LabelForm>
          <InputForm
            type="password"
            placeholder="input your password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </WrapperInputs>
        {Errors.password && <WrapperError>{Errors.password}</WrapperError>}
      </div>
      {Error && <WrapperError>{Error}</WrapperError>}
      <ButtonForm>Register</ButtonForm>
    </Formu>
  );
};

export default FormCreateAcount;
