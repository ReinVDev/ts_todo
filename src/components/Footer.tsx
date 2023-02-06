import React from "react";
import styles from "./Footer.module.css";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>React + TS Todo © 2023. Todos os direitos reservados.</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
