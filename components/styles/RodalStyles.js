import styled from 'styled-components'

const RodalStyles = styled.section`
  .rodal,
  .rodal-mask {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .rodal {
    position: fixed;
  }

  .rodal:focus {
    outline: none;
  }

  /* -- mask -- */
  .rodal-mask {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
  }

  /* -- dialog -- */
  .rodal-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .rodal-dialog:focus {
    outline: none;
  }

  /* -- close button -- */
  .rodal-close {
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
  }

  .rodal-close:before,
  .rodal-close:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    -webkit-transition: background 0.2s;
    transition: background 0.2s;
  }

  .rodal-close:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .rodal-close:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .rodal-close:hover:before,
  .rodal-close:hover:after {
    background: #333;
  }

  /* -- zoom -- */
  @-webkit-keyframes rodal-zoom-enter {
    from {
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }

  @keyframes rodal-zoom-enter {
    from {
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }

  .rodal-zoom-enter {
    -webkit-animation: rodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: rodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
  }

  @-webkit-keyframes rodal-zoom-leave {
    to {
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }

  @keyframes rodal-zoom-leave {
    to {
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }

  .rodal-zoom-leave {
    -webkit-animation: rodal-zoom-leave both;
    animation: rodal-zoom-leave both;
  }

  /* -- slideDown -- */
  @-webkit-keyframes rodal-slideDown-enter {
    from {
      -webkit-transform: translate3d(0, -800px, 0);
      transform: translate3d(0, -800px, 0);
    }
  }

  @keyframes rodal-slideDown-enter {
    from {
      -webkit-transform: translate3d(0, -800px, 0);
      transform: translate3d(0, -800px, 0);
    }
  }

  .rodal-slideDown-enter {
    -webkit-animation: rodal-slideDown-enter both;
    animation: rodal-slideDown-enter both;
  }

  @-webkit-keyframes rodal-slideDown-leave {
    to {
      -webkit-transform: translate3d(0, -800px, 0);
      transform: translate3d(0, -800px, 0);
    }
  }

  @keyframes rodal-slideDown-leave {
    to {
      -webkit-transform: translate3d(0, -800px, 0);
      transform: translate3d(0, -800px, 0);
    }
  }

  .rodal-slideDown-leave {
    -webkit-animation: rodal-slideDown-leave both;
    animation: rodal-slideDown-leave both;
  }

  /* -- slideLeft -- */
  @-webkit-keyframes rodal-slideLeft-enter {
    from {
      -webkit-transform: translate3d(-150px, 0, 0);
      transform: translate3d(-150px, 0, 0);
    }
  }

  @keyframes rodal-slideLeft-enter {
    from {
      -webkit-transform: translate3d(-150px, 0, 0);
      transform: translate3d(-150px, 0, 0);
    }
  }

  .rodal-slideLeft-enter {
    -webkit-animation: rodal-slideLeft-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: rodal-slideLeft-enter both cubic-bezier(0.4, 0, 0, 1.5);
  }

  @-webkit-keyframes rodal-slideLeft-leave {
    to {
      -webkit-transform: translate3d(-150px, 0, 0);
      transform: translate3d(-150px, 0, 0);
    }
  }

  @keyframes rodal-slideLeft-leave {
    to {
      -webkit-transform: translate3d(-150px, 0, 0);
      transform: translate3d(-150px, 0, 0);
    }
  }

  .rodal-slideLeft-leave {
    -webkit-animation: rodal-slideLeft-leave both;
    animation: rodal-slideLeft-leave both;
  }

  /* -- slideRight -- */
  @-webkit-keyframes rodal-slideRight-enter {
    from {
      -webkit-transform: translate3d(150px, 0, 0);
      transform: translate3d(150px, 0, 0);
    }
  }

  @keyframes rodal-slideRight-enter {
    from {
      -webkit-transform: translate3d(150px, 0, 0);
      transform: translate3d(150px, 0, 0);
    }
  }

  .rodal-slideRight-enter {
    -webkit-animation: rodal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: rodal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
  }

  @-webkit-keyframes rodal-slideRight-leave {
    to {
      -webkit-transform: translate3d(150px, 0, 0);
      transform: translate3d(150px, 0, 0);
    }
  }

  @keyframes rodal-slideRight-leave {
    to {
      -webkit-transform: translate3d(150px, 0, 0);
      transform: translate3d(150px, 0, 0);
    }
  }

  .rodal-slideRight-leave {
    -webkit-animation: rodal-slideRight-leave both;
    animation: rodal-slideRight-leave both;
  }

  /* -- slideUp -- */
  @-webkit-keyframes rodal-slideUp-enter {
    from {
      -webkit-transform: translate3d(0, 100px, 0);
      transform: translate3d(0, 100px, 0);
    }
  }

  @keyframes rodal-slideUp-enter {
    from {
      -webkit-transform: translate3d(0, 100px, 0);
      transform: translate3d(0, 100px, 0);
    }
  }

  .rodal-slideUp-enter {
    -webkit-animation: rodal-slideUp-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: rodal-slideUp-enter both cubic-bezier(0.4, 0, 0, 1.5);
  }

  @-webkit-keyframes rodal-slideUp-leave {
    to {
      -webkit-transform: translate3d(0, 100px, 0);
      transform: translate3d(0, 100px, 0);
    }
  }

  @keyframes rodal-slideUp-leave {
    to {
      -webkit-transform: translate3d(0, 100px, 0);
      transform: translate3d(0, 100px, 0);
    }
  }

  .rodal-slideUp-leave {
    -webkit-animation: rodal-slideUp-leave both;
    animation: rodal-slideUp-leave both;
  }

  /* -- flip -- */
  @-webkit-keyframes rodal-flip-enter {
    from {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
    }
    70% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  @keyframes rodal-flip-enter {
    from {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
    }
    70% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  .rodal-flip-enter {
    -webkit-animation: rodal-flip-enter both ease-in;
    animation: rodal-flip-enter both ease-in;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
  }

  @-webkit-keyframes rodal-flip-leave {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
    }
  }

  @keyframes rodal-flip-leave {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
    }
  }

  .rodal-flip-leave {
    -webkit-animation: rodal-flip-leave both;
    animation: rodal-flip-leave both;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
  }

  /* -- rotate -- */
  @-webkit-keyframes rodal-rotate-enter {
    from {
      -webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
      transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
    }
  }

  @keyframes rodal-rotate-enter {
    from {
      -webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
      transform: rotate3d(0, 0, 1, -180deg) scale3d(0.3, 0.3, 0.3);
    }
  }

  .rodal-rotate-enter {
    -webkit-animation: rodal-rotate-enter both;
    animation: rodal-rotate-enter both;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  @-webkit-keyframes rodal-rotate-leave {
    to {
      -webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
      transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
    }
  }

  @keyframes rodal-rotate-leave {
    to {
      -webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
      transform: rotate3d(0, 0, 1, 180deg) scale3d(0.3, 0.3, 0.3);
    }
  }

  .rodal-rotate-leave {
    -webkit-animation: rodal-rotate-leave both;
    animation: rodal-rotate-leave both;
    -webkit-transform-origin: center;
    transform-origin: center;
  }

  /* -- door -- */
  @-webkit-keyframes rodal-door-enter {
    from {
      -webkit-transform: scale3d(0, 1, 1);
      transform: scale3d(0, 1, 1);
    }
  }

  @keyframes rodal-door-enter {
    from {
      -webkit-transform: scale3d(0, 1, 1);
      transform: scale3d(0, 1, 1);
    }
  }

  .rodal-door-enter {
    -webkit-animation: rodal-door-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: rodal-door-enter both cubic-bezier(0.4, 0, 0, 1.5);
  }

  @-webkit-keyframes rodal-door-leave {
    60% {
      -webkit-transform: scale3d(0.01, 1, 1);
      transform: scale3d(0.01, 1, 1);
    }
    to {
      -webkit-transform: scale3d(0, 1, 0.1);
      transform: scale3d(0, 1, 0.1);
    }
  }

  @keyframes rodal-door-leave {
    60% {
      -webkit-transform: scale3d(0.01, 1, 1);
      transform: scale3d(0.01, 1, 1);
    }
    to {
      -webkit-transform: scale3d(0, 1, 0.1);
      transform: scale3d(0, 1, 0.1);
    }
  }

  .rodal-door-leave {
    -webkit-animation: rodal-door-leave both;
    animation: rodal-door-leave both;
  }
`

export default RodalStyles
