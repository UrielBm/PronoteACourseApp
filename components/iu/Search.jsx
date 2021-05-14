import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
const Search = () => {
  const [search, setsearch] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //validación no cambia
    if (search.trim() === "") return;
    setsearch("");
    Router.push({
      pathname: "/SearchPage",
      query: { q: search },
    });
  };
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <div className="wrapperInput">
        <label className="label">Search: </label>
        <input
          placeholder="Search a course"
          className="input"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
      </div>
      <div className="wrapperButton">
        <button type="submit" className="SearchButton">
          <span>Search</span>
          <Image src="/static/img/search.svg" width={15} height={15} />
        </button>
      </div>
      <style jsx>{`
        .form {
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }
        .label {
          margin: 0 0.5rem 0 0;
          box-sixing: border-box;
        }
        .input {
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          box-sizing: border-box;
          outline: none;
        }
        .SearchButton {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 15rem;
          border: none;
          border-radius: 2rem;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          box-sizing: border-box;
          margin-left: 0.5rem;
          transition: width 0.4s ease, background-color 0.4s ease;
        }
        .SearchButton:hover {
          cursor: pointer;
          width: 18rem;
          background-color: #51c4d3;
        }
        @media (max-width: 1200px) {
          .form {
            flex-direction: column;
            align-items: flex-start;
          }
          .wrapperInput {
            margin: 0 0 1rem 0;
          }
          .wrapperInput .label {
            margin: 0 0 0.5rem 0;
          }
          .wrapperInput .input {
            border: none;
            width: 9rem;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            box-sizing: border-box;
            outline: none;
          }
          .SearchButton {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            width: 8rem;
            border: none;
            border-radius: 2rem;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            box-sizing: border-box;
            margin-left: 0rem;
            transition: width 0.4s ease, background-color 0.4s ease;
          }
          .SearchButton:hover {
            cursor: pointer;
            width: 10rem;
            background-color: #583585;
            color: #ffffff;
          }
        }
      `}</style>
    </form>
  );
};

export default Search;
