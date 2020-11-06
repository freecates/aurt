const BlockImg = ({ src, width, height, alt, className, borderRadius }) => {
  return (
    <img
      loading='lazy'
      src={src}
      style={{
        maxWidth: `${width}px`,
        height: `auto`,
        borderRadius: borderRadius ? '50%' : null,
      }}
      className={className ? `${className}` : null}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default BlockImg;
