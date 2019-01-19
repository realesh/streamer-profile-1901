import React, { Component } from 'react'
import {
  Container,
  PictureContainer,
  HeaderContainer,
  InputContainer,
  CommentInput,
  CommentListContainer,
  CommentItem,
  StreamCruxLogo
} from '../styled-components/Profile'

import StarRating from './StarRating'
import SubscribeModal from './SubscribeModal'
import LoginModal from './LoginModal'
import { Notification } from './Notification'

import avatarAkantorex from '../images/avatar.jpg'
import logo from '../images/logo.svg'

class Profile extends Component {
  state = {
    streamers: {
      name: 'AkantoreX',
      avatar: avatarAkantorex
    },
    commentList: [
      {
        name: 'Samuel Sandro',
        comment:
          "Expert streamers! It's always fun to watch someone like him getting sub 1 on many monsters, please do Arch-Tempered versions too! Cheers!"
      },
      {
        name: 'Christine Liviani',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar mattis. Nam eleifend felis vel e ex scelerisqu venenatis. Fusce eget nisl fermentum enim hendrerit mattis a vel tellus.'
      },
      {
        name: 'Kennard Alcander',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar mattis. Nam eleifend felis vel e ex scelerisqu venenatis. Fusce eget nisl fermentum enim hendrerit mattis a vel tellus.'
      }
    ],
    inputComment: '',
    activeUser: '',
    showSubscribeModal: false,
    showLoginModal: false,

    notificationType: '',
    notificationMessage: '',
    showNotification: false,

    subscriberList: []
  }

  render() {
    const {
      streamers,
      commentList,
      inputComment,
      activeUser,
      showSubscribeModal,
      showLoginModal,
      notificationType,
      notificationMessage,
      showNotification
    } = this.state

    return (
      <Container>
        {/* MODAL */}
        <SubscribeModal
          show={showSubscribeModal}
          toggleModal={this._toggleSubscribeModal}
          handleSubscribe={this._handleSubscribe}
        />
        <LoginModal
          show={showLoginModal}
          toggleModal={this._toggleLoginModal}
          handleLogin={this._handleLogin}
        />

        {/* NOTIFICATION */}
        <Notification
          type={notificationType}
          message={notificationMessage}
          show={showNotification}
        />

        <StreamCruxLogo src={logo} />
        <PictureContainer image={streamers.avatar} name={streamers.name} />
        <StarRating toggleModal={this._toggleSubscribeModal} />
        <HeaderContainer>
          <h1>Your Comments.</h1>
          <button onClick={activeUser === '' ? this._toggleLoginModal : this._handleLogout}>
            {activeUser === '' ? 'Login' : 'Logout'}
          </button>
        </HeaderContainer>
        <InputContainer>
          <CommentInput
            disabled={activeUser === ''}
            type="text"
            rows="3"
            placeholder={activeUser === '' ? 'Login to post comment' : 'Type your comment here...'}
            onChange={e => this.setState({ inputComment: e.target.value })}
            value={inputComment}
          />
          <button onClick={this._postComment}>Post Comment</button>
        </InputContainer>
        <CommentListContainer>
          {commentList.map(comment => (
            <CommentItem>
              <h2>{comment.name}</h2>
              <p>{comment.comment}</p>
            </CommentItem>
          ))}
        </CommentListContainer>
      </Container>
    )
  }

  _toggleSubscribeModal = () => {
    let oldState = this.state.showSubscribeModal
    this.setState({ showSubscribeModal: !oldState })
  }

  _toggleLoginModal = () => {
    let oldState = this.state.showLoginModal
    this.setState({ showLoginModal: !oldState })
  }

  _handleSubscribe = email => {
    let oldSubscriber = [...this.state.subscriberList]
    let newSubscriber = [...oldSubscriber, email]
    this.setState({ subscriberList: newSubscriber })
    this._handleNotification('INFO', `${email} subscribed!`)
  }

  _handleLogout = () => {
    const oldUser = this.state.activeUser
    this.setState({ activeUser: '' })
    this._handleNotification('INFO', `Bye ${oldUser}!`)
  }

  _handleLogin = user => {
    this.setState({ activeUser: user })
    this._handleNotification('INFO', `Hi ${user}!`)
  }

  _handleNotification = (type, message) => {
    this.setState({ showNotification: true, notificationType: type, notificationMessage: message })
    setTimeout(() => {
      this.setState({ showNotification: false })
    }, 1500)
  }

  _postComment = () => {
    const { commentList, activeUser, inputComment } = this.state
    // Handle if user not logged in
    if (activeUser === '') {
      this._handleNotification('DANGER', 'Login first to post a comment!')
      return false
    }

    //Handle if comment input field is empty
    if (inputComment === '') {
      this._handleNotification('DANGER', 'Comment should not be empty!')
      return false
    }

    let oldCommentList = [...commentList]
    let newCommentList = [
      ...oldCommentList,
      {
        name: activeUser,
        comment: inputComment
      }
    ]
    this.setState({ commentList: newCommentList, inputComment: '' })
    this._handleNotification('INFO', 'Comment posted!')
    return true
  }
}

export default Profile
