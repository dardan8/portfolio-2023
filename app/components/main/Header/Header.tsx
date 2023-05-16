import React from "react";
import styles from "./Header.module.scss";
import Bubble from "../../global/Bubble/Bubble";
import Portrait from "../../../../public/images/profile-dardan.png";

import Image from "next/image";
import TechStack from "../TechStack/TechStack";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.descr}>
          <h1>
            Hi <span className={styles.hi_icon}>👋</span>
          </h1>
          <h3 className={styles.titlearea}>
            I’m Dardan, <span className='highlight1'>Frontend Developer.</span>{" "}
            Experienced in <span className='highlight2'>UI/UX Design.</span>{" "}
            Helping build your digital products. Let's get in touch!
          </h3>
        </div>

        <div className={styles.profile}>
          <div className={styles.bubble1}>
            <Bubble content='Frontend Developer' />
          </div>
          <div className={styles.bubble2}>
            <Bubble content='ReactJS' />
          </div>
          <div className={styles.bubble3}>
            <Bubble content='UI/UX Design' />
          </div>
          <Image
            src={Portrait}
            alt='Portrait'
            width={300}
            className={styles.portrait}
          />
        </div>
      </div>

      <div className={styles.header__bottom}>
        <TechStack />
      </div>
    </div>
  );
};

export default Header;
