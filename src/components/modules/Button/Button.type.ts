export type TOnClick = (
  event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ...rest: unknown[]
) => void | unknown;

export type ButtonProp = {
  className?: string;
  variant?:
    "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
  asChild?: boolean;
  href?: string | null;
  isActiveAware?: boolean;
  disabled?: boolean;
  type: "button" | "submit";
  onClick?: TOnClick;
  style?: React.CSSProperties;
};
