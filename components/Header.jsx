import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import NavBar from "./layout/NavBar";
import styles from "../styles/Header.module.scss";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.wrapperHeader}>
      <header className={styles.header}>
        <div className={styles.wrapperMenuHamburguer}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div>
          <Link href="/">
            <div className={styles.wrapperHome}>
              <h1 className={styles.title}>Promote a Course</h1>
              <Image
                src="/static/img/logo.svg"
                alt="its a logo"
                width={45}
                height={45}
                className={styles.logo}
              />
            </div>
          </Link>
        </div>
      </header>
      <div className={styles.wrapperNavBar}>
        {isOpen ? (
          <NavBar className="responsive" />
        ) : (
          <NavBar className="Desktop" />
        )}
      </div>
    </div>
  );
};

export default Header;
