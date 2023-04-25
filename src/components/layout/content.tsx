import React, { ReactElement } from "react";
import styles from "./layout.module.scss";

interface IProp {
  view: ReactElement;
}
export default function Content({ view }: IProp) {
  return <div className={styles.layoutContent}>{view}</div>;
}
