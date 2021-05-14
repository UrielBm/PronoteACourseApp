import React, { useState } from "react";
import useValidation from "../hooks/useValidation";
import validationLogin from "../rules/validationLogin";
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
const FormLogin = () => {
  const [Error, SetError] = useState(false);
  const INITIAL_STATE = {
    email: "",
    password: "",
  };
  const {
    Values,
    Errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(INITIAL_STATE, validationLogin, handleLogin);
  async function handleLogin() {
    try {
      await firebase.login(email, password);
      Router.push("/");
    } catch (error) {
      SetError(error.message);
    }
  }
  const { email, password } = Values;
  return (
    <Formu onSubmit={handleSubmit}>
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
      <ButtonForm>Login</ButtonForm>
    </Formu>
  );
};

export default FormLogin;
