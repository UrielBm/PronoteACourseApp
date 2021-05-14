import React from "react";
import styles from "../styles/FullDataCourse.module.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ButtonLink from "./iu/ButtonsLinks";
const FullCourse = ({
  course,
  user,
  handleVote,
  handleOnChange,
  handleOnSubmit,
  handleDelete,
  comment,
}) => {
  const {
    author,
    category,
    comentaries,
    courseName,
    creation,
    date,
    description,
    urlCourse,
    urlImage,
    votes,
    creator,
    listVotes,
  } = course;
  const isCreator = (id) => {
    if (creator.id == id) {
      return true;
    }
  };
  const handleActionVote = () => {
    handleVote();
  };
  const HandlecanIdelete = () => {
    if (!user) return false;
    if (creator.id === user.uid) {
      return true;
    }
  };
  return (
    <article className={styles.wrapperCourse}>
      <section className={styles.wrapperImage}>
        <img className={styles.images} src={urlImage} alt="course Image" />
      </section>
      <section className={styles.wrapperTitle}>
        <h1 className={styles.Title}>{courseName}</h1>
      </section>
      <section className={styles.wrapperInfo}>
        <p>Category: {category}</p>
        <p>Published: {formatDistanceToNow(new Date(creation))} ago</p>
        <p>Speaker: {author}</p>
        <p>Event's day: {date}</p>
        <p>Published By: {creator.name}</p>
        <p>
          Votes: <span className={styles.votes}>{votes}</span>{" "}
          <svg className={styles.heart} viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
        </p>
      </section>
      <section className={styles.wrapperDescription}>
        <h2>Description:</h2>
        <p>{description}</p>
      </section>
      <section className={styles.wrapperButtons}>
        <ButtonLink href={urlCourse} target="_blank" className={styles.url}>
          Go to Url
        </ButtonLink>
        {user &&
          (listVotes.includes(user.uid) ? (
            <button
              className={styles.likeButton}
              onClick={handleActionVote}
              disabled
            >
              <span>You have voted</span>
              <svg className={styles.heart} viewBox="0 0 32 29.6">
                <path
                  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                />
              </svg>
            </button>
          ) : (
            <button className={styles.likeButton} onClick={handleActionVote}>
              <span>Vote +1</span>
              <svg className={styles.heart} viewBox="0 0 32 29.6">
                <path
                  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                />
              </svg>
            </button>
          ))}
      </section>
      {user && (
        <>
          <form className={styles.wrapperForm} onSubmit={handleOnSubmit}>
            <textarea
              className={styles.textarea}
              placeholder="Type your comment about this course"
              value={comment.mensaje ? comment.mensaje : ""}
              name="mensaje"
              id="mensaje"
              onChange={handleOnChange}
            ></textarea>
            <button type="Submit" className={styles.buttonComent}>
              Add your comment
            </button>
          </form>
        </>
      )}
      <section className={styles.wrapperComments}>
        <h2>Commentaries</h2>
        {comentaries.length === 0 ? (
          <p className={styles.text}>Aun no hay comentarios</p>
        ) : (
          <ul className={styles.comments}>
            {comentaries.map((conmentarie, index) => {
              return (
                <li
                  className={styles.comment}
                  key={`${conmentarie.userid}-${index}`}
                >
                  <div>
                    <p>{conmentarie.mensaje}</p>
                    <p>
                      Type by: <span>{conmentarie.userName}</span>
                    </p>
                  </div>
                  <div>
                    {isCreator(conmentarie.userid) && (
                      <p className={styles.creador}>Type by creator</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      {HandlecanIdelete() && (
        <section className={styles.wrapperDelete}>
          <button className={styles.ButtonDelete} onClick={handleDelete}>
            Eliminar Curso
          </button>
        </section>
      )}
    </article>
  );
};

export default FullCourse;
