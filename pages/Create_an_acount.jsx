import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import FormCreateAcount from "../components/FormCreateAcount";
import Title from "../components/iu/Title";

const WrapperForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  box-sizing: border-box;
`;
export default function Create_an_acount() {
  return (
    <div>
      <Layout />
      <Title>Create an acount</Title>
      <WrapperForm>
        <FormCreateAcount />
      </WrapperForm>
    </div>
  );
}
