import Link from 'next/link';

const Packs = ({ route }) => {
  const text =
    route === '/ca'
      ? 'MENÚ & HABITACIÓ'
      : route === '/en'
      ? 'MENU & ROOM'
      : 'MENÚ & HABITACIÓN';
  const anchorText =
    route === '/ca'
      ? 'PACK DISPONIBLE'
      : route === '/en'
      ? 'PACK AVAILABLE'
      : 'PACK DISPONIBLE';
  return (
    <>
      <Link href={`${route}/pack`}>
        <a>
          <img
            loading='lazy'
            src='/static/pack-2.svg'
            alt='Pack Menu Hotel'
            width='96'
            height='32'
          />
        </a>
      </Link>
      <br />
      <span>{text}</span>
      <br />
      <Link href={`${route}/pack`}>
        <a>
          <strong>{anchorText}</strong>
        </a>
      </Link>
    </>
  );
};

export default Packs;
