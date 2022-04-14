import React from 'react';
import Link from 'next/link';
import SubTitle from './styles/SubTitle';
import TextBlock from './styles/TextBlock';
import ItemStyles from './styles/ItemStyles';
import { IntlProvider, FormattedDate } from 'react-intl';

const Item = ({ item, ruta }) => {
  const textBlock = item.content.rendered.substring(0, 280) + '...';
  const itemDate = item.date;
  const featuredImage = item._embedded['wp:featuredmedia'][0];
  return (
    <ItemStyles>
      <TextBlock>
        <p className='center'>
          <small>
            <IntlProvider defaultLocale='es-ES'>
              <FormattedDate value={itemDate} />
            </IntlProvider>
          </small>
        </p>
      </TextBlock>
      <SubTitle>
        {ruta.includes('/ca') && (
          <Link href={`/ca/${item.id}/${item.slug}`}>
            <a dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Link>
        )}
        {ruta.includes('/en') && (
          <Link href={`/en/${item.id}/${item.slug}`}>
            <a dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Link>
        )}
        {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
          <Link href={`/${item.id}/${item.slug}`}>
            <a dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Link>
        )}
      </SubTitle>
      {featuredImage && (
        <img
          loading='lazy'
          style={{ padding: '3rem 0 0' }}
          src={featuredImage.media_details.sizes.large.source_url}
          alt={item.title}
          width={featuredImage.media_details.sizes.large.width}
          height={featuredImage.media_details.sizes.large.height}
        />
      )}
      <TextBlock>
        <div dangerouslySetInnerHTML={{ __html: textBlock }} />
        <p>
          {ruta.includes('/ca') && (
          <Link href={`/ca/${item.id}/${item.slug}`}>
              <a title={item.title.rendered}>[+]</a>
            </Link>
          )}
          {ruta.includes('/en') && (
          <Link href={`/en/${item.id}/${item.slug}`}>
              <a title={item.title.rendered}>[+]</a>
            </Link>
          )}
          {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
          <Link href={`/${item.id}/${item.slug}`}>
              <a title={item.title.rendered}>[+]</a>
            </Link>
          )}
        </p>
      </TextBlock>
    </ItemStyles>
  );
};

export default Item;
