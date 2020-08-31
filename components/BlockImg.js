const BlockImg = ({ src, width, height, alt, className, borderRadius }) => {
  return (
    <img
      loading='lazy'
      src={src}
      style={{
        width: `${width}px`,
        height: `${height}px`,
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
