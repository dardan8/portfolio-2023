import React from "react";
import styles from "./LastCTA.module.scss";
import Button from "../../global/Button/Button";

const LastCTA = () => {
  return (
    <div className={styles.cta_bg} id='experience'>
      <div className={styles.cta_section}>
        <h3 className={styles.cta_title}>
          Want to learn more about my experience?
        </h3>
        <h4 className={styles.cta_text}>
          Send an e-mail at{" "}
          <a href='mailto:dardan.dara@gmail.com' target='_blank' rel='nofollow'>
            dardan.dara@gmail.com{" "}
          </a>
          and let’s schedule a call.
        </h4>
        <a href='mailto:dardan.dara@gmail.com' target='_blank' rel='nofollow'>
          <Button version='secondary' placeholder='Get in touch' />
        </a>
      </div>
    </div>
  );
};

export default LastCTA;
