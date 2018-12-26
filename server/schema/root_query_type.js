const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    version: {
      type: GraphQLString,
      resolve() {
        return "1.0.0";
      }
    }
  })
});

module.exports = RootQuery;
