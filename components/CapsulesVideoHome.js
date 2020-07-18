import InnerLayout from './InnerLayout'

const CapsulesVideoHome = () => (
  <InnerLayout videolayout>
    <video
      autoPlay={true}
      loop={true}
      muted={true}
      width="100%"
      playsInline={true}
      poster="/static/poster-capsules-video-web-aurt.png"
      style={{ zIndex: '2998' }}
    >
      <source
        src="https://aurtdata.now.sh/static/capsula-aurt-web.webm"
        type="video/webm"
      />
      <source
        src="https://aurtdata.now.sh/static/capsula-aurt-web.mp4"
        type="video/mp4"
      />
      <p>
        Your browser doesn't support HTML5 video. Here is a{' '}
        <a href="https://aurtdata.now.sh/static/capsula-aurt-web.mp4">
          link to the video
        </a>{' '}
        instead.
      </p>
    </video>
  </InnerLayout>
)

export default CapsulesVideoHome
