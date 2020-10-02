import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import SubTitle from './styles/SubTitle';
import TextBlock from './styles/TextBlock';
import ItemStyles from './styles/ItemStyles';
import { IntlProvider, FormattedDate } from 'react-intl';

const propTypes = {
  item: PropTypes.object.isRequired,
  ruta: PropTypes.object.isRequired,
};

export default class Item extends React.Component {
  render() {
    const ruta = this.props.ruta;
    const { item } = this.props;
    const textBlock = item.node.content.substring(0, 280) + '...';
    const itemDate = item.node.date.replace(/-/g, '/');
    console.log(itemDate);
    console.log(new Date(item.node.date));
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
            <Link
              href={{
                pathname: '/ca/item',
                query: { id: item.node.id },
              }}>
              <a dangerouslySetInnerHTML={{ __html: item.node.title }} />
            </Link>
          )}
          {ruta.includes('/en') && (
            <Link
              href={{
                pathname: '/en/item',
                query: { id: item.node.id },
              }}>
              <a dangerouslySetInnerHTML={{ __html: item.node.title }} />
            </Link>
          )}
          {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
            <Link
              href={{
                pathname: '/item',
                query: { id: item.node.id },
              }}>
              <a dangerouslySetInnerHTML={{ __html: item.node.title }} />
            </Link>
          )}
        </SubTitle>
        {item.node.featuredImage && (
          <img loading='lazy'
            style={{ padding: '3rem 0 0' }}
            src={item.node.featuredImage.mediaDetails.sizes[2].sourceUrl}
            alt={item.node.title}
            width={item.node.featuredImage.mediaDetails.sizes[2].width}
            height={item.node.featuredImage.mediaDetails.sizes[2].height}
          />
        )}
        <TextBlock>
          <div dangerouslySetInnerHTML={{ __html: textBlock }} />
          <p>
            {ruta.includes('/ca') && (
              <Link
                href={{
                  pathname: '/ca/item',
                  query: { id: item.node.id },
                }}>
                <a title={item.node.title}>[+]</a>
              </Link>
            )}
            {ruta.includes('/en') && (
              <Link
                href={{
                  pathname: '/en/item',
                  query: { id: item.node.id },
                }}>
                <a title={item.node.title}>[+]</a>
              </Link>
            )}
            {ruta.indexOf('/ca') == -1 && ruta.indexOf('/en') == -1 && (
              <Link
                href={{
                  pathname: '/item',
                  query: { id: item.node.id },
                }}>
                <a title={item.node.title}>[+]</a>
              </Link>
            )}
          </p>
        </TextBlock>
      </ItemStyles>
    );
  }
}

Item.propTypes = propTypes;
