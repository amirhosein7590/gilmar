import { CSSProperties } from "react";

type TBackground = {
  src?: string;
  className?: string;
  style?: CSSProperties;
};

function Background({ src, className, style }: TBackground) {
  const imageSrc = src ? { backgroundImage: `url('${src}')` } : {};
  return (
    <div className={className ?? ""} style={{ ...imageSrc, ...style }}></div>
  );
}

export default Background;
