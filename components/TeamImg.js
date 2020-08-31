const TeamImg = ({ src, width, height }) => {
  return (
    <img
      loading='lazy'
      src={src}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '50%',
      }}
      width={width}
      height={height}
    />
  );
};

export default TeamImg;
