import styles from "../styles/Home.module.scss";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import FormLogin from "../components/FormLogin";
const Heading = styled.h1`
  color: red;
  font-size: 2rem;
  text-align: center;
  padding: 6.5rem 0 0 0;
  box-sizing: border-box;
`;
const WrapperForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  box-sizing: border-box;
`;
export default function Login() {
  return (
    <div>
      <Layout />
      <Heading className={styles.title}>Login</Heading>
      <WrapperForm>
        <FormLogin />
      </WrapperForm>
    </div>
  );
}
