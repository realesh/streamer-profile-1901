import styled from 'styled-components'
import Global from '../styles/Global'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const { highlight, highlightLight, highlightDark } = Global.colour

const StarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 20vw;

  margin-bottom: 40px;
`

const StarIcon = styled(FontAwesomeIcon)`
  color: ${props => (props.hovered ? highlightLight : props.active ? highlight : highlightDark)};
  z-index: 0;
`

const StarHighlight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`

const HighlightLeft = styled.div`
  position: absolute;
  display: flex;

  content: ' ';
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  opacity: 0;
  z-index: 1;
`
const HighlightRight = styled.div`
  position: absolute;
  display: flex;

  content: ' ';
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  opacity: 0;
  z-index: 1;
`

export { StarContainer, StarIcon, StarHighlight, HighlightLeft, HighlightRight }
