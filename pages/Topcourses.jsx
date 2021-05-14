import styles from "../styles/Home.module.scss";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import TopCourses from "../components/TopCourses";
const Heading = styled.h1`
  color: red;
  font-size: 2rem;
  text-align: center;
  padding: 6.5rem 0 0 0;
  box-sizing: border-box;
`;
const WrapperTop = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  box-sizing: border-box;
`;
export default function Topcourses() {
  return (
    <div>
      <Layout />
      <Heading className={styles.title}>Top courses</Heading>
      <WrapperTop>
        <TopCourses />
      </WrapperTop>
    </div>
  );
}
