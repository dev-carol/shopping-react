import styles from "./button.module.css";

export function Button({ variant = "default", children, onClick }) {
  let className = styles.button;
  if (variant === "primary") {
    className = `${className} ${styles.buttonPrimary}`;
  } else if (variant === "deleteSmallButton") {
    className = `${className} ${styles.deleteSmallButton}`;
  }
  else if (variant === "smallButtonAction") {
    className = `${className} ${styles.smallButtonAction}`;
  }
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
