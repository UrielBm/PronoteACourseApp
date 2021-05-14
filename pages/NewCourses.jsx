import styles from "../styles/Home.module.scss";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import FormNewCourse from "../components/FormNewCourse";
import React, { useContext } from "react";
import { FirebaseContext } from "../firebase";
import Error404 from "../components/layout/Error404";
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
export default function NewCourses() {
  const { user } = useContext(FirebaseContext);
  return (
    <div>
      <Layout />
      {!user ? (
        <Error404 text={"Upps.. you don't have permissons to be here"} />
      ) : (
        <>
          <Heading className={styles.title}>New Course</Heading>
          <WrapperForm>
            <FormNewCourse />
          </WrapperForm>
        </>
      )}
    </div>
  );
}
