import React from "react";
import Course from "./Course";
import styled from "@emotion/styled";
import useCourse from "../hooks/useCourse";
const CarruselCourses = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const TopCourses = () => {
  const { courses } = useCourse("votes");
  return (
    <>
      <CarruselCourses>
        {courses.map((course) => {
          return <Course key={course.id} course={course} />;
        })}
      </CarruselCourses>
    </>
  );
};

export default TopCourses;
