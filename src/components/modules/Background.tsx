type TBackground = {
  src?: string;
  className?: string;
};

function Background({ src, className }: TBackground) {
  const style = src ? { backgroundImage: `url('${src}')` } : {};
  return <div className={className ?? ""} style={style}></div>;
}

export default Background;
