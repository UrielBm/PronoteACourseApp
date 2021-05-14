import styled from "@emotion/styled";

export const Formu = styled.form`
  max-width: 800px;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    max-width: 360px;
  }
`;
export const WrapperInputs = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  box-sizing: border-box;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
export const LabelForm = styled.label`
  font-size: 1.2rem;
  font-weight: 300;
  &::first-letter {
    font-size: 1.3rem;
    color: #126e82;
    font-weight: 700;
  }
`;
export const InputForm = styled.input`
  width: 100%;
  font-size: 0.9rem;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  border: solid 0.2rem #126e82;
  outline: none;
  transition: background-color 0.5s ease-in-out;
  &::placeholder {
    color: #000000;
  }
  &:focus {
    background-color: rgba(0, 162, 255, 0.6);
    color: #000000;
  }
`;
export const SelectForm = styled.select`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  border: solid 0.2rem #126e82;
  outline: none;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  &::placeholder {
    color: #000000;
  }
  &:focus {
    background-color: rgba(0, 162, 255, 0.6);
    color: #000000;
  }
`;
export const TextArea = styled.textarea`
  height: 20rem;
  width: 100%;
  font-size: 0.9rem;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  border: solid 0.2rem #126e82;
  box-sizing: border-box;
  outline: none;
  transition: background-color 0.5s ease-in-out;
  &::placeholder {
    color: #000000;
  }
  &:focus {
    background-color: rgba(0, 162, 255, 0.6);
    color: #000000;
  }
`;
export const ButtonForm = styled.button`
  width: 85%;
  font-size: 1.1rem;
  text-transform: uppercase;
  outline: none;
  border-radius: 2rem;
  border: none;
  background-color: #126e82;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
  &:hover {
    width: 100%;
    background-color: rgba(0, 162, 255, 0.6);
  }
`;
export const FieldSet = styled.fieldset`
  border: 1px solid #cccccc;
  padding: 1rem 2rem;
  margin: 2rem 0 2rem 0;
  box-sizing: border-box;
  text-align: start;
  @media (max-width: 1080px) {
    width: 100%;
  }
`;
export const WrapperError = styled.p`
  font-size: 0.9rem;
  color: #db0e0e;
  border: none;
  border-radius: 0.6rem;
  padding: 0.3rem;
  margin: 1rem 0;
  box-sizing: border-box;
  font-weight: 700;
  background-color: #f6f6f5;
`;
