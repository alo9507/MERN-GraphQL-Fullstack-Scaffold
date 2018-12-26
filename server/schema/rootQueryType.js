const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt
} = graphql;
const MomType = require('./types/momType');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    mom: {
      name: 'mom',
      type: MomType,
      arguments: { id: { type: new GraphQLNonNull(GraphQLInt) } }
    },
    version: {
      type: GraphQLString,
      resolve() {
        return '1.0.0';
      }
    }
  })
});

module.exports = RootQuery;
