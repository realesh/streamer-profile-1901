import React from 'react'

import { Container, Message } from '../styled-components/Notification'

const Notification = ({ type, message, show }) => {
  return (
    <Container type={type} show={show}>
      <h4>{message}</h4>
    </Container>
  )
}

export { Notification }
