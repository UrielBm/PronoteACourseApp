import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";
const Card = styled.section`
  width: 340px;
  border-radius: 0.5rem;
  text-align: center;
  border: solid 1px #cccccc;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  @media (max-width: 1200px) {
    margin: 0 0 2rem 0;
  }
`;
const WrapperTitle = styled.div`
  margin-bottom: 1rem;
`;
const Title = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  &:hover {
    font-size: 1.3rem;
    color: #1378bb;
  }
`;
const PictureCourse = styled.img`
  width: 100%;
  height: 12rem;
  border-radius: 2rem;
`;
const WrapperFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.85rem;
  }
`;
const WrapperDescription = styled.div`
  h4 {
    font-size: 1.1rem;
    color: #1378bb;
    font-weight: 700;
    margin: 1rem 0;
  }
  p {
    margin-bottom: 1rem;
    text-align: justify;
    &:first-of-type {
      width: 100%;
      height: 4rem;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #888888;
    }
    &::first-letter {
      color: #1378bb;
      font-size: 2rem;
    }
  }
`;
const WrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0;
`;
const WrapperInfoIcon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;
const Icon = styled.img`
  width: 2rem;
  margin: 0 0.5rem 0 0;
  box-sizing: border-box;
`;
const IconSvg = styled.svg`
  fill: #e78a8a;
  width: 2rem;
  margin: 0 0.5rem 0 0;
  box-sizing: border-box;
`;
const Course = ({ course }) => {
  const {
    id,
    creation,
    author,
    urlImage,
    description,
    date,
    category,
    courseName,
    votes,
    comentaries,
  } = course;
  return (
    <Card>
      <WrapperTitle>
        <Link href="/courses/[id]" as={`/courses/${id}`}>
          <Title>{courseName}</Title>
        </Link>
      </WrapperTitle>
      <WrapperFeatures>
        <p>Category: {category}</p>
        <p>Published: {formatDistanceToNow(new Date(creation))} ago</p>
      </WrapperFeatures>

      <WrapperDescription>
        <h4>About this course:</h4>
        <p>{description}</p>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
      </WrapperDescription>
      <div>
        <PictureCourse src={urlImage} alt="course" />
      </div>
      <WrapperIcons>
        <WrapperInfoIcon>
          <IconSvg viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </IconSvg>
          <p>{votes} votes</p>
        </WrapperInfoIcon>
        <WrapperInfoIcon>
          <Icon src="https://img.icons8.com/pastel-glyph/128/000000/comments--v2.png" />
          <p>{comentaries.length} comentaries</p>
        </WrapperInfoIcon>
      </WrapperIcons>
    </Card>
  );
};

export default Course;
