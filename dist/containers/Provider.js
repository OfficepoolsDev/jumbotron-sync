import { graphql } from 'react-apollo';
import * as triviaQueries from '../graphql/queries';

var Provider = function Provider(_ref) {
  var children = _ref.children,
      gameInstance = _ref.gameInstance;
  return children({ gameInstance: gameInstance });
};

var graphQLQuery = graphql(triviaQueries.gameInstance, {
  options: {
    variables: {
      id: 'ac7e5ced-522e-4098-be1b-cd5cbc663a22'
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      gameInstance: data.gameInstance,
      data: data
    };
  }
});

export default graphQLQuery(Provider);