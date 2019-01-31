var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { API, graphqlOperation } from 'aws-amplify';

import * as subscribtions from '../graphql/subscriptions';
import { eventTypes as CONSTANTS_TRIVIA } from '../constants';

var Navigator = function (_Component) {
  _inherits(Navigator, _Component);

  function Navigator(props) {
    _classCallCheck(this, Navigator);

    var _this = _possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call(this, props));

    _this.state = {
      eventType: null,
      leaderboard: {}
    };
    return _this;
  }

  _createClass(Navigator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var gameInstance = this.props.gameInstance;


      API.graphql(graphqlOperation(subscribtions.onCreateGameEvent, { gameInstanceId: gameInstance.id })).subscribe({
        next: function next(event) {
          _this2.setState(Object.assign({}, _.get(event, 'value.data.onCreateGameEvent', null)));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          gameInstance = _props.gameInstance,
          WelcomeScreen = _props.WelcomeScreen,
          QuestionScreen = _props.QuestionScreen,
          ShowOptionsScreen = _props.ShowOptionsScreen,
          AnswerScreen = _props.AnswerScreen,
          FinalScreen = _props.FinalScreen,
          WaitingScreen = _props.WaitingScreen;
      var eventType = this.state.eventType;


      var injectedProps = Object.assign({}, this.state);

      var questionScreenProps = Object.assign({}, injectedProps, {
        showOptions: eventType === CONSTANTS_TRIVIA.showOptions
      });

      switch (eventType) {
        case CONSTANTS_TRIVIA.start:
          return React.createElement(WelcomeScreen, injectedProps);
        case CONSTANTS_TRIVIA.question:
          return React.createElement(QuestionScreen, questionScreenProps);
        case CONSTANTS_TRIVIA.showOptions:
          return React.createElement(ShowOptionsScreen, questionScreenProps);
        case CONSTANTS_TRIVIA.answer:
          return React.createElement(AnswerScreen, injectedProps);
        case CONSTANTS_TRIVIA.final:
          return React.createElement(FinalScreen, injectedProps);
        default:
          return React.createElement(WaitingScreen, injectedProps);
      }
    }
  }]);

  return Navigator;
}(Component);

Navigator.propTypes = {
  gameInstance: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  WelcomeScreen: PropTypes.func.isRequired,
  QuestionScreen: PropTypes.func.isRequired,
  AnswerScreen: PropTypes.func.isRequired,
  FinalScreen: PropTypes.func.isRequired
};

Navigator.defaultProps = {
  gameInstance: {}
};

export default Navigator;