import React, { Component } from 'react'

import {
  ModalBackground,
  ModalContainer,
  InputContainer,
  CloseIcon
} from '../styled-components/Modal'

class SubscribeModal extends Component {
  state = {
    inputEmail: ''
  }

  render() {
    const { toggleModal, show } = this.props

    return (
      <ModalBackground show={show}>
        <ModalContainer>
          <h1>Subscribe to CruxFeed</h1>
          <h3>Stay up to date! Get all the latest CruxFeed posts straight to your inbox!</h3>
          <InputContainer>
            <input
              type="email"
              placeholder="your.email@example.com"
              onChange={e => this.setState({ inputEmail: e.target.value })}
            />
            <button onClick={this._submitSubscriber}>Subscribe</button>
          </InputContainer>
        </ModalContainer>
        <CloseIcon icon="times" size="2x" onClick={toggleModal} />
      </ModalBackground>
    )
  }

  _submitSubscriber = () => {
    alert(this.state.inputEmail)
  }
}

export default SubscribeModal
