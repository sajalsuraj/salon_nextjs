import cx from "classnames";
import styles from "./button.module.scss";
interface ButtonProps {
  type: string;
  text: string;
  onBtnClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={cx("flex", "items-center", "p-2", "rounded", {
        [styles.btnPrimary]: props.type === "primary",
        [styles.btnDanger]: props.type === "danger",
        [styles.btnOutline]: props.type === "outline",
      })}
      onClick={props.onBtnClick}
    >
      {props.text}
    </button>
  );
}
