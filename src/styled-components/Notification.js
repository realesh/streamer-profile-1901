import styled from 'styled-components'
import Global from '../styles/Global'

const { font, fontLight, fontDark, highlight, highlightLight, highlightDark } = Global.colour

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  margin: 40px;

  border-radius: 5px;
  background-color: ${props => (props.type === 'DANGER' ? '#850000' : highlight)};

  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(10%)')} !important;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  > h4 {
    font-size: 1em;
    color: ${props => (props.type === 'DANGER' ? font : fontDark)}
    margin: 15px 25px;
  }
`

export { Container }
