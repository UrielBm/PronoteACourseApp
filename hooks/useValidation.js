import React, { useEffect, useState } from "react";

const useValidation = (initialState, Validation, HandleAction) => {
  const [Values, setValues] = useState(initialState);
  const [Errors, setErrors] = useState({});
  const [ActionHandleSubmit, setAtionHandleSubmit] = useState(false);
  useEffect(() => {
    if (ActionHandleSubmit) {
      const noError = Object.keys(Errors).length === 0;
      if (noError) {
        HandleAction();
      }
      setAtionHandleSubmit(false);
    }
  }, [Errors]);

  // esciiendo en inputs
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };
  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = Validation(Values);
    setErrors(errorsValidation);
    setAtionHandleSubmit(true);
  };
  const handleBlur = () => {
    const errorsValidation = Validation(Values);
    setErrors(errorsValidation);
  };
  return {
    Values,
    Errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidation;
