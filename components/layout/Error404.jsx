import React from "react";
const Error404 = ({ text }) => {
  return (
    <>
      <div className="Wrappererror">
        <h3 className="error">{text}</h3>
        <img
          src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"
          alt="error imagen"
          className="imageError"
        />
      </div>
      <style jsx>{`
        .Wrappererror {
          background: #000000;
          width: 100%;
          height: 100vh;
          display: flex;
          padding: 6.5rem 0 0 0;
          box-sizing: border-box;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .error {
          color: #ffffff;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }
        .imageError {
          width: 100%;
        }
        @media (min-width: 1080px) {
          .imageError {
            width: 60%;
          }
        }
      `}</style>
    </>
  );
};

export default Error404;
