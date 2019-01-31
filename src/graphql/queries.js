import gql from 'graphql-tag'

export const gameInstance = gql`query GameInstance($id: ID!) {
  gameInstance(id: $id) {
    id
    startingAt
    status
  timeToAnswer
  timeShowingCorrectAnswer
    questions {
      code
      text
      options {
        code
        text
      }
      correctAnswer {
        code
        text
      }
    }
  }
}
`

export const leaderboard = gql`query getLeaderboard(
  $leaderboardId: ID!
) {
  leaderboard(
    id: $leaderboardId,
  ) {
    id
    gameInstance {
      id
      status
    }
    leaderboard {
      user {
        firstName
        lastName
      }
      points
      position
      tied
    }
  }
}
`
