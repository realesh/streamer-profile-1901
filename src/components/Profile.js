import React, { Component } from 'react'
import {
  Container,
  PictureContainer,
  InputContainer,
  CommentInput,
  CommentListContainer,
  CommentItem,
  StreamCruxLogo
} from '../styled-components/Profile'

import StarRating from './StarRating'
import { SubscribeModal } from './SubscribeModal'

import Global from '../styles/Global'

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
    activeUser: 'Admin',
    showSubscribeModal: false
  }

  render() {
    const { commentList, inputComment, showSubscribeModal, streamers } = this.state

    return (
      <Container>
        {/* MODAL */}
        <SubscribeModal show={showSubscribeModal} toggleModal={this._toggleSubscribeModal} />

        <StreamCruxLogo src={logo} />
        <PictureContainer image={streamers.avatar} name={streamers.name} />
        <StarRating toggleModal={this._toggleSubscribeModal} />
        <InputContainer>
          <h1>Your Comments.</h1>
          <CommentInput
            type="text"
            rows="3"
            placeholder="Type your comment here..."
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

  _postComment = () => {
    const { commentList, activeUser, inputComment } = this.state
    if (inputComment === '') return false

    let oldCommentList = [...commentList]
    let newCommentList = [
      ...oldCommentList,
      {
        name: activeUser,
        comment: inputComment
      }
    ]
    this.setState({ commentList: newCommentList, inputComment: '' })
    return true
  }
}

export default Profile
