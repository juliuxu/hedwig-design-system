import styles from "./button.module.css";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles.root}>
      {props.children}
      <span className="hds-text-signature">lol</span>
    </button>
  );
}

Button.displayName = "Button";
