import Link from "next/link";
import React, { useContext } from "react";
import styled from "@emotion/styled";
import FirebaseContext from "../../firebase/context";
const Links = styled.a`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
  color: #d8e3e7;
  margin: 0 0.5rem 0 0;
  &:last-of-type {
    margin: 0 0 0 0;
  }
  &:hover {
    cursor: pointer;
    color: #51c4d3;
  }
`;
const Navegation = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <nav className="links">
      <Link href="/Topcourses">
        <Links>Top Courses</Links>
      </Link>
      {user && (
        <Link href="/NewCourses">
          <Links>New course</Links>
        </Link>
      )}
      <style jsx>{`
           @media (max-width: 1200px) { 
             .links{
               display:flex;
               flex-direction: column;
               margin: 1rem 0;
             }
           }
      }`}</style>
    </nav>
  );
};

export default Navegation;
