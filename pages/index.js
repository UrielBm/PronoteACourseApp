import styles from "../styles/Home.module.scss";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import HomeCourses from "../components/HomeCourses";
const Heading = styled.h1`
  color: red;
  font-size: 2rem;
  text-align: center;
  padding: 6.5rem 0 0 0;
  box-sizing: border-box;
`;
const WrapperHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  box-sizing: border-box;
`;
export default function Home() {
  return (
    <div>
      <Layout />
      <Heading className={styles.title}>Inicio</Heading>
      <WrapperHome>
        <HomeCourses />
      </WrapperHome>
    </div>
  );
}
