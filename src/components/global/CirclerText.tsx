import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "../../styles/CirclerText.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  text: string;
}

export const CirclerText = ({ children, text, ...rest }: Props) => {
  return (
    <div
      className={
        "relative w-48 h-48 flex items-center justify-center rounded-full"
      }
      {...rest}
    >
      <div className={styles.logo}>{children}</div>
      <div className={styles.text}>
        <p>
          {text.split("").map((char, i) => {
            return (
              <span
                key={char + i}
                style={{
                  transform: `rotate(${i * 10.3}deg)`,
                }}
              >
                {char}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
