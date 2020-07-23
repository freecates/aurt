import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from '@apollo/client/react/components';
import Error from './ErrorMessage';
import styled from 'styled-components';
import InnerLayout from './InnerLayout';
import TextBlock from './styles/TextBlock';

const propTypes = {};

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  .details {
    margin: 0 1rem;
    font-size: 2rem;
  }
  .center {
    text-align: center;
    margin-bottom: 0;
  }
  ul {
    margin: 0 auto;
    padding: 0;
    max-width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    list-style-type: none;
    @media (min-width: 568px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 40rem;
    }
    @media (min-width: 1360px) {
      max-width: 50rem;
    }
    figure {
      margin: 0;
      padding: 0;
      img {
        padding: 0.25em;
        max-width: 100%;
        width: 140px;
        height: 140px;
        object-fit: cover;
        @media (min-width: 1360px) {
          width: 160px;
          height: 160px;
        }
      }
    }
  }
`;

const SINGLE_PAGE_QUERY = gql`
  query SINGLE_PAGE_QUERY($id: ID!) {
    page(id: $id) {
      id
      pageId
      title
      author {
        name
      }
      date
      uri
      content(format: RAW)
    }
  }
`;

const defaultProps = {};

export default class LaGaleria extends React.Component {
  render() {
    return (
      <InnerLayout mainlayout>
        <Query query={SINGLE_PAGE_QUERY} variables={{ id: this.props.id }}>
          {({ error, loading, data }) => {
            if (error) return <Error error={error} />;
            if (loading) return <p>Loading...</p>;
            if (!data.page) return <p>No page found for {this.props.id}</p>;
            const page = data.page;
            return (
              <SingleItemStyles>
                <TextBlock>
                  <div className='center'>
                    <a
                      href={'https://www.instagram.com/aurtrestaurant'}
                      target='_blank'
                      rel='noopener'
                      title={'Instragram @aurtrestaurant'}>
                      <img
                        alt='logo instagram'
                        src='/static/Instagram_black.svg'
                        style={{
                          width: '28px',
                          height: '28px',
                          marginRight: '.25em',
                          verticalAlign: 'text-bottom',
                        }}
                      />
                    </a>
                    <a
                      href={'https://www.instagram.com/aurtrestaurant'}
                      target='_blank'
                      rel='noopener'
                      title={'Instragram @aurtrestaurant'}>
                      <span>@aurtrestaurant</span>
                    </a>
                  </div>
                </TextBlock>
                <div className='details'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: page.content,
                    }}
                  />
                </div>
              </SingleItemStyles>
            );
          }}
        </Query>
      </InnerLayout>
    );
  }
}

LaGaleria.propTypes = propTypes;
LaGaleria.defaultProps = defaultProps;
LaGaleria.SINGLE_PAGE_QUERY = SINGLE_PAGE_QUERY;
