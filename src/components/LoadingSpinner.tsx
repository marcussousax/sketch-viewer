import styled from 'styled-components'

const LoadingSpinner = () => <Icon />

const Icon = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after {
    content: ' ';
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0.5rem;
    border-radius: 5rem;
    border: 0.3rem solid var(--loading-spinner-bg);
    border-color: var(--loading-spinner-bg) transparent
      var(--loading-spinner-bg) transparent;
    animation: dual-ring 1.2s linear infinite;
  }
  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default LoadingSpinner
