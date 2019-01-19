import styled, { keyframes } from 'styled-components'
import Global from '../styles/Global'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { font, fontLight, fontDark, highlight, highlightLight, highlightDark } = Global.colour

const closeIconRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(90deg);
  }
`

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;

  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: all 0.3s ease-out 0.2s;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;

  > h1 {
    margin-bottom: 10px;
    padding: 0;
    font-size: 4em;
    color: ${font};
  }

  > h3 {
    margin-bottom: 10px;
    padding: 0;

    text-align: center;
    font-size: 2.5em;
    font-weight: lighter;
    color: ${font};
  }
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;

  margin-top: 40px;

  > input {
    flex: 2;
    margin-right: 20px;
    padding: 15px 25px;

    border-radius: 15px;
    border: 2px solid ${fontDark};
    background-color: ${fontLight};

    font-size: 1.3em;
    color: ${fontDark};

    &:focus {
      outline: none;
      border: 2px solid ${highlight};
    }

    &::placeholder {
      color: '#A9A9A9';
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  > button {
    align-self: flex-end;
    padding: 15px 25px;

    border-radius: 15px;
    border: 2px solid #080b15;
    background: linear-gradient(${highlight}, ${highlightDark});
    font-size: 1.3em;
    font-weight: 700;
    color: ${fontDark};
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${highlight};
      border: 2px solid transparent;
      background: none;
    }
  }
`

const CloseIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 40px;
  color: ${font};

  &:hover {
    animation: ${closeIconRotate} 0.2s linear;
    color: ${highlightLight};
  }
`

export { ModalBackground, ModalContainer, InputContainer, CloseIcon }
