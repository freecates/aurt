import Head from 'next/head'
import InnerLayout from '../../components/InnerLayout'
import MediaItems from '../../components/MediaItems'
import TextSeparator from '../../components/styles/TextSeparator'
import Title from '../../components/styles/Title'

const Gallery = props => (
  <InnerLayout mainlayout>
    <Head>
      <title>AURT | Gallery</title>
    </Head>
    <Title>GAllery</Title>
    <TextSeparator>
      <div className="here" />
    </TextSeparator>
    <MediaItems ruta={props.pathname} />
  </InnerLayout>
)

export default Gallery
