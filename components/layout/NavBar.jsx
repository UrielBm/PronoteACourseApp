import React, { useContext } from "react";
import Search from "../iu/Search";
import Navegation from "./Navegation";
import Link from "next/link";
import Button from "../iu/Button";
import FirebaseContext from "../../firebase/context";
const NavBar = ({ className }) => {
  const { user, firebase } = useContext(FirebaseContext);
  return (
    <div className={className}>
      <section>
        <Search />
      </section>
      <section>
        <Navegation />
      </section>
      <section className="wrapperUserActions">
        {user ? (
          <>
            <p className="user">Welcome: {user.displayName}</p>
            <section className="wrapperActions">
              <Button bgColor="true" onClick={() => firebase.logout()}>
                Log out
              </Button>
            </section>
          </>
        ) : (
          <section className="wrapperActions">
            <Link href="/Login">
              <Button bgColor="true">Login</Button>
            </Link>
            <Link href="/Create_an_acount">
              <Button>Create an acount</Button>
            </Link>
          </section>
        )}
      </section>
      <style jsx>{`
        .Desktop {
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;
        }
        .Desktop .wrapperUserActions .user {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #d8e3e7;
        }
        @media (max-width: 1200px) {
          .Desktop {
            display: none;
          }
          .responsive {
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-end;
            margin: 4rem 0 0 0;
            background-color: #126e82;
            padding: 1rem;
            height: 100vh;
          }
          .responsive .wrapperUserActions .user {
            font-size: 1.2rem;
            font-weight: 700;
            margin: 0 0 0.5rem 0;
            color: #d8e3e7;
          }
          .responsive .wrapperUserActions .wrapperActions {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
