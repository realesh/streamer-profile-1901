import React, { Component } from 'react'

import {
  ModalBackground,
  ModalContainer,
  InputContainer,
  CloseIcon
} from '../styled-components/Modal'

class LoginModal extends Component {
  state = {
    inputName: ''
  }

  render() {
    const { toggleModal, show, handleLogin } = this.props
    const { inputName } = this.state

    return (
      <ModalBackground show={show}>
        <ModalContainer>
          <h1>Login to StreamCrux</h1>
          <h3>You can post comments to this streamers if you do so!</h3>
          <InputContainer>
            <input
              type="text"
              placeholder="your name"
              onChange={e => this.setState({ inputName: e.target.value })}
            />
            <button
              onClick={() => {
                handleLogin(inputName)
                toggleModal()
              }}
            >
              Login
            </button>
          </InputContainer>
        </ModalContainer>
        <CloseIcon icon="times" size="2x" onClick={toggleModal} />
      </ModalBackground>
    )
  }
}

export default LoginModal
