import { graphql } from 'react-apollo'
import * as triviaQueries from '../graphql/queries'

const Provider = ({ children, gameInstance }) => children({ gameInstance })

const graphQLQuery = graphql(triviaQueries.gameInstance, {
  options: {
    variables: {
      id: 'ac7e5ced-522e-4098-be1b-cd5cbc663a22'
    }
  },
  props: ({ data }) => ({
    gameInstance: data.gameInstance,
    data
  })
})

export default graphQLQuery(Provider)
