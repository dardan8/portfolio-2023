import React from "react";
import styles from "./Bubble.module.scss";

type BubbleProps = {
  content: string;
};
const Bubble = ({ content }: BubbleProps) => {
  return <div className={styles.bubble}>{content}</div>;
};

export default Bubble;
