import React from "react";
import styles from "../styles/Home.module.scss";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import HomeSearch from "../components/HomeSearch";
import Error404 from "../components/layout/Error404";
const Heading = styled.h1`
  color: red;
  font-size: 2rem;
  text-align: center;
  padding: 6.5rem 0 0 0;
  box-sizing: border-box;
`;
const WrapperSearch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  box-sizing: border-box;
`;
export default function SearchPage() {
  const router = useRouter();
  let query = router.query.q;
  if (query) {
    query = query.toLowerCase();
  }
  return (
    <div>
      <Layout />
      {!query ? (
        <Error404 text={"Upps.. noting to Search"} />
      ) : (
        <>
          <Heading className={styles.title}>courses</Heading>
          <WrapperSearch>
            <HomeSearch query={query} />
          </WrapperSearch>
        </>
      )}
    </div>
  );
}
