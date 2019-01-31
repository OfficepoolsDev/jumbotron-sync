import React, { Component } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { API, graphqlOperation } from 'aws-amplify'

import * as subscribtions from '../graphql/subscriptions'
import { eventTypes as CONSTANTS_TRIVIA } from '../constants'

class Navigator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eventType: null,
      leaderboard: {},
    }
  }

  componentDidMount() {
    const { gameInstance } = this.props

    API.graphql(
      graphqlOperation(subscribtions.onCreateGameEvent, { gameInstanceId: gameInstance.id }),
    ).subscribe({
      next: event => {
        this.setState({
          ..._.get(event, 'value.data.onCreateGameEvent', null)
        })
      },
    })
  }

  render() {
    const {
      gameInstance,
      WelcomeScreen,
      QuestionScreen,
      ShowOptionsScreen,
      AnswerScreen,
      FinalScreen,
      WaitingScreen,
    } = this.props

    const { 
      eventType,
    } = this.state

    const injectedProps = {...this.state }

    const questionScreenProps = {
      ...injectedProps,
      showOptions: eventType === CONSTANTS_TRIVIA.showOptions
    }

    switch (eventType) {
      case CONSTANTS_TRIVIA.start:
        return <WelcomeScreen {...injectedProps} />
      case CONSTANTS_TRIVIA.question:
        return <QuestionScreen {...questionScreenProps} />
      case CONSTANTS_TRIVIA.showOptions:
        return <ShowOptionsScreen {...questionScreenProps} />
      case CONSTANTS_TRIVIA.answer:
        return <AnswerScreen {...injectedProps} />
      case CONSTANTS_TRIVIA.final:
        return <FinalScreen {...injectedProps} />
      default:
        return <WaitingScreen {...injectedProps} />
    }
  }
}

Navigator.propTypes = {
  gameInstance: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  WelcomeScreen: PropTypes.func.isRequired,
  QuestionScreen: PropTypes.func.isRequired,
  AnswerScreen: PropTypes.func.isRequired,
  FinalScreen: PropTypes.func.isRequired,
}

Navigator.defaultProps = {
  gameInstance: {},
}

export default Navigator
