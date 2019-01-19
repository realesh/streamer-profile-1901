import React, { Component } from 'react'
import {
  StarContainer,
  StarIcon,
  StarHighlight,
  HighlightLeft,
  HighlightRight
} from '../styled-components/StarRating'

class StarRating extends Component {
  state = {
    ratings: [
      {
        rating: 'full',
        status: 'normal'
      },
      {
        rating: 'full',
        status: 'normal'
      },
      {
        rating: 'full',
        status: 'normal'
      },
      {
        rating: 'empty',
        status: 'normal'
      },
      {
        rating: 'empty',
        status: 'normal'
      }
    ],
    // ratings: ['full', 'full', 'full', 'empty', 'empty'],
    starHovered: { index: -1, position: '' }
  }

  render() {
    const { ratings, starHovered } = this.state
    return (
      <StarContainer>
        {ratings.map(({ rating, status }, index) => (
          <StarHighlight>
            <HighlightLeft
              onClick={() => this._handleStarClick(index, 'left')}
              onPointerEnter={() => this._handleHoverEnter(index, 'left')}
              onPointerOut={() => this._handleHoverLeave()}
            />
            <HighlightRight
              onClick={() => this._handleStarClick(index, 'right')}
              onPointerEnter={() => this._handleHoverEnter(index, 'right')}
              onPointerOut={() => this._handleHoverLeave()}
            />
            <StarIcon
              icon={this._renderStarType(index)}
              size="2x"
              active={rating !== 'empty'}
              hovered={index <= starHovered.index}
            />
          </StarHighlight>
        ))}
      </StarContainer>
    )
  }

  _handleHoverEnter = (index, position) => {
    this.setState({ starHovered: { index, position } })
  }

  _handleHoverLeave = () => {
    this.setState({ starHovered: { index: -1, position: '' } })
  }

  _renderStarType = starIndex => {
    const { ratings, starHovered } = this.state

    //Render star if hovered
    if (starHovered.index !== -1) {
      if (starHovered.position === 'left') {
        if (starIndex < starHovered.index) return 'star'
        else if (starIndex === starHovered.index) return 'star-half-alt'
        else return ['far', 'star']
      } else if (starHovered.position === 'right') {
        if (starIndex <= starHovered.index) return 'star'
        else return ['far', 'star']
      }
    }

    //Render star from state
    if (ratings[starIndex].rating === 'full') return 'star'
    else if (ratings[starIndex].rating === 'half') return 'star-half-alt'
    else return ['far', 'star']
  }

  _handleStarClick = (starIndex, position) => {
    const { ratings } = this.state
    const { toggleModal } = this.props

    let oldRatings = [...ratings]
    let newRatings = oldRatings.map(({ rating, status }, index) => {
      if (position === 'left') {
        if (index < starIndex) return { rating: 'full', status: 'normal' }
        else if (index === starIndex) return { rating: 'half', status: 'normal' }
        else return { rating: 'empty', status: 'dim' }
      } else {
        if (index <= starIndex) return { rating: 'full', status: 'normal' }
        else return { rating: 'empty', status: 'dim' }
      }
    })
    this.setState({ ratings: newRatings })
    toggleModal()
  }
}

export default StarRating
