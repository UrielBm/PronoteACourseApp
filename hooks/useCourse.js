import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../firebase";

const useCourse = (order) => {
  const { firebase } = useContext(FirebaseContext);
  const [courses, setCourses] = useState([]);
  const driverSnapShot = (snapshot) => {
    const courses = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setCourses(courses);
  };
  useEffect(() => {
    const handleGetCourses = async () => {
      await firebase.db
        .collection("courses")
        .orderBy(order, "desc")
        .onSnapshot(driverSnapShot);
    };
    handleGetCourses();
  }, []);
  return {
    courses,
  };
};
export default useCourse;
