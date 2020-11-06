import Image from 'next/image';

const BlockImg = ({ src, width, height, alt, className }) => {
  console.log('className ', className);
  return (
    <Image
      loading='lazy'
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className ? className : null}
    />
  );
};

export default BlockImg;
