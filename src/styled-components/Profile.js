import styled from 'styled-components'
import Global from '../styles/Global'

const { background, font, fontDark, highlight, highlightDark } = Global.colour

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background-color: ${background};
`

const StreamCruxLogo = styled.img`
  width: 10vw;
  height: auto;
  margin-top: 40px;
  z-index: 10;
`

const PictureContainer = styled.div`
  position: relative;
  display: flex;
  height: 280px;
  width: 280px;
  margin: 50px;
  border-radius: 150px;
  overflow: hidden;

  background: url(${props => props.image});
  background-position: center;
  background-size: cover;

  &:hover {
    &::before {
      display: flex;
      justify-content: center;
      align-items: center;
      content: attr(name);
      color: ${font};
      font-size: 2em;

      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
    }
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 40vw;

  > h1 {
    align-self: flex-start;
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 2em;
    color: ${font};
  }

  > button {
    align-self: flex-end;
    margin: 10px 0 0 0;
    padding: 15px 25px;

    border-radius: 5px;
    border: 2px solid #080b15;
    background: linear-gradient(${highlight}, ${highlightDark});
    font-size: 1em;
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

const CommentInput = styled.textarea`
  height: 8vh;
  width: Calc(100% - 40px);
  padding: 20px;

  border-radius: 5px;
  border: 2px solid #080b15;
  background-color: #101640;

  font-size: 1.3em;
  color: ${font};

  resize: none;

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
`

const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 35vw;

  margin: 20px 0 40px 0;
`

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;

  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #101640;

  &:first-child {
    padding-top: 0px;
  }

  h2 {
    align-self: flex-start;
    margin: 10px 0;
    padding: 0;

    color: ${font};
    font-size: 1.5em;
    font-weight: 500;
  }

  p {
    align-self: flex-start;
    margin: 0;
    padding: 0;

    color: ${font};
    font-size: 1.2em;
  }
`

export {
  Container,
  StreamCruxLogo,
  PictureContainer,
  InputContainer,
  CommentInput,
  CommentListContainer,
  CommentItem
}
