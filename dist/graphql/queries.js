var _templateObject = _taggedTemplateLiteral(['query GameInstance($id: ID!) {\n  gameInstance(id: $id) {\n    id\n    startingAt\n    status\n  timeToAnswer\n  timeShowingCorrectAnswer\n    questions {\n      code\n      text\n      options {\n        code\n        text\n      }\n      correctAnswer {\n        code\n        text\n      }\n    }\n  }\n}\n'], ['query GameInstance($id: ID!) {\n  gameInstance(id: $id) {\n    id\n    startingAt\n    status\n  timeToAnswer\n  timeShowingCorrectAnswer\n    questions {\n      code\n      text\n      options {\n        code\n        text\n      }\n      correctAnswer {\n        code\n        text\n      }\n    }\n  }\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['query getLeaderboard(\n  $leaderboardId: ID!\n) {\n  leaderboard(\n    id: $leaderboardId,\n  ) {\n    id\n    gameInstance {\n      id\n      status\n    }\n    leaderboard {\n      user {\n        firstName\n        lastName\n      }\n      points\n      position\n      tied\n    }\n  }\n}\n'], ['query getLeaderboard(\n  $leaderboardId: ID!\n) {\n  leaderboard(\n    id: $leaderboardId,\n  ) {\n    id\n    gameInstance {\n      id\n      status\n    }\n    leaderboard {\n      user {\n        firstName\n        lastName\n      }\n      points\n      position\n      tied\n    }\n  }\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import gql from 'graphql-tag';

export var gameInstance = gql(_templateObject);

export var leaderboard = gql(_templateObject2);