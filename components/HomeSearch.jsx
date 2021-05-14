import React, { useEffect, useState } from "react";
import Course from "./Course";
import styled from "@emotion/styled";
import useCourse from "../hooks/useCourse";
const CarruselCourses = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const HomeSearch = ({ query }) => {
  const { courses } = useCourse("votes");
  const [newArrayCourses, setnewArrayCourses] = useState([]);
  useEffect(() => {
    const newFilter = courses.filter((course) => {
      return (
        course.courseName.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
      );
    });
    setnewArrayCourses(newFilter);
  }, [query, courses]);
  return (
    <div>
      <>
        <CarruselCourses>
          {newArrayCourses.map((course) => {
            return <Course key={course.id} course={course} />;
          })}
        </CarruselCourses>
      </>
    </div>
  );
};

export default HomeSearch;
