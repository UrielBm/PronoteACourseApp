import styled from "@emotion/styled";

const Button = styled.button`
  border-radius: 2rem;
  border: none;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.bgColor ? "#51c4d3" : "#d8e3e7")};
  color: #132c33;
  box-sizing: border-box;
  margin: 0 1rem 0 0;
  transition: background-color 0.4s ease-in-out;
  &:last-of-type {
    margin: 0 0 0 0;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.bgColor ? "#a4e7f0" : "#d8e3e7")};
  }
  @media (max-width: 1200px) {
    margin: 0 0 0.5rem 0;
  }
`;

export default Button;
