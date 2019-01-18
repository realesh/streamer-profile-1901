import React, { Component } from 'react'
import { StarContainer, StarIcon } from '../styled-components/StarRating'

class StarRating extends Component {
  state = {
    ratings: ['full', 'full', 'full', 'empty', 'empty']
  }

  render() {
    const { ratings } = this.state
    return (
      <StarContainer>
        {ratings.map((rating, index) => (
          <StarIcon
            icon={this._renderStarType(index)}
            size="3x"
            onClick={() => this._handleStarClick(index)}
            active={rating !== 'empty'}
          />
        ))}
      </StarContainer>
    )
  }

  _renderStarType = starIndex => {
    const { ratings } = this.state
    if (ratings[starIndex] === 'full') return 'star'
    else return ['far', 'star']
  }

  _handleStarClick = starIndex => {
    const { ratings } = this.state
    const { toggleModal } = this.props

    let oldRatings = [...ratings]
    let newRatings = oldRatings.map((rating, index) => {
      if (index <= starIndex) return 'full'
      else return 'empty'
    })
    this.setState({ ratings: newRatings })
    toggleModal()
  }
}

export default StarRating
