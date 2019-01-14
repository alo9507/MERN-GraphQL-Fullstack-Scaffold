const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} = graphql;

const AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = AuthorType;
