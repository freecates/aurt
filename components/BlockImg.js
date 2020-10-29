import Image from 'next/image';

const BlockImg = ({ src, width, height, alt, className, borderRadius }) => {
  return (
    <Image
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
