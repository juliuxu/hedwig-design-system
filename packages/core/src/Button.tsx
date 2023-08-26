export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button>{props.children} jas</button>;
}

Button.displayName = "Button";
