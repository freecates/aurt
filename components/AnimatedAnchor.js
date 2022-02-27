import React from "react";
class AnimatedAnchor extends React.Component {
  state = { fade: false }

  render() {
    const { fade } = this.state

    return (
      <button
        onClick={() => this.setState({ fade: true })}
        onAnimationEnd={() => this.setState({ fade: false })}
        className={fade ? 'fade' : ''}
      >
        Click me!
      </button>
    )
  }
}

export default AnimatedAnchor
