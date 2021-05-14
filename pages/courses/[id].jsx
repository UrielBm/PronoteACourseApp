import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import Layout from "../../components/layout/Layout";
import Error404 from "../../components/layout/Error404";
import Spinner from "../../components/iu/Spinner";
import FullCourse from "../../components/FullCourse";
const course = () => {
  // state del iobjeto curso
  const [course, Setcourse] = useState({});
  const [error, SetError] = useState(false);
  const [comment, SetComment] = useState({});
  const [queryDB, SetqueryDB] = useState(true);
  // uso del hook useRouter
  const router = useRouter();
  const { id } = router.query;
  // uso de useContext
  const { firebase, user } = useContext(FirebaseContext);
  useEffect(() => {
    if (id && queryDB) {
      const getCourse = async () => {
        const queryCourse = await firebase.db.collection("courses").doc(id);
        const course = await queryCourse.get();
        if (course.exists) {
          Setcourse(course.data());
          SetqueryDB(false);
        } else {
          SetError(true);
          SetqueryDB(false);
        }
      };
      getCourse();
    }
  }, [id, course]);
  const handleVote = () => {
    if (!user) {
      return router.push("/login");
    }
    const totalvotes = course.votes + 1;
    if (course.listVotes.includes(user.uid)) return;
    const newlistVotes = [...course.listVotes, user.uid];
    //update de db
    firebase.db
      .collection("courses")
      .doc(id)
      .update({ votes: totalvotes, listVotes: newlistVotes });
    // update the state
    Setcourse({
      ...course,
      votes: totalvotes,
    });
    SetqueryDB(true);
  };
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    SetComment({
      ...comment,
      [name]: value,
    });
  };
  const handleDelete = async () => {
    if (!user) {
      return router.push("/login");
    }
    if (course.creator.id !== user.uid) {
      return router.push("/");
    }
    try {
      await firebase.db.collection("courses").doc(id).delete();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      return router.push("/login");
    }
    if (comment.mensaje.trim() === "") return;
    comment.userid = user.uid;
    comment.userName = user.displayName;
    const newArrayComent = [...course.comentaries, comment];
    SetComment({
      mensaje: "",
      userid: null,
      userName: null,
    });

    //update bd
    firebase.db
      .collection("courses")
      .doc(id)
      .update({ comentaries: newArrayComent });
    //update state
    Setcourse({
      ...course,
      comentaries: newArrayComent,
    });
    SetqueryDB(true);
  };
  return (
    <>
      <Layout>
        {error ? (
          <Error404 text={"Course not Found"} />
        ) : (
          <div className="wrapperGeneralCourse">
            {Object.keys(course).length === 0 ? (
              <Spinner />
            ) : (
              <FullCourse
                course={course}
                user={user}
                handleVote={handleVote}
                comment={comment}
                SetComment={SetComment}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        )}
      </Layout>
      <style jsx>{`
        .wrapperGeneralCourse {
          display: flex;
          justify-content: center;
          padding: 6rem 0 0 0;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default course;
