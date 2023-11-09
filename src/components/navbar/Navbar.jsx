import React from "react";
import { Link, LargeTitle } from "@fluentui/react-components";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const farItems = [
    {
      key: "github",
      text: "GitHub",
      href: "https://github.com/MichaelEclavea",
    },
    {
      key: "contact",
      text: "Contact",
      href: "mailto:mikesOwn671@gmail.com",
    },
    {
      key: "walottery",
      text: "WA Lottery",
      href: "https://www.walottery.com/",
    },
  ];

  return (
    <div className={styles.root}>
      <Link appearance="subtle" href="/" className={styles.title}>
        <LargeTitle className={styles.title}>QuickPick</LargeTitle>
      </Link>
      <div className={styles.farItems}>
        {farItems.map((item) => (
          <Link
            key={item.key}
            appearance="subtle"
            href={item.href}
            target={"_blank"}
            rel="noreferrer"
            text={item.text}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
