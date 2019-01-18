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
  color: ${props => (props.active ? highlight : highlightDark)};

  &:hover {
    color: ${highlightLight};
  }
`

export { StarContainer, StarIcon }
