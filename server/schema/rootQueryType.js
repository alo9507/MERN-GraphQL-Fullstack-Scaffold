const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = graphql;

const Author = require('../models/author');
const AuthorType = require('./types/authorType');

const PostType = require('./types/postType');
const Post = require('../models/post');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    author: {
      type: AuthorType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { id }) {
        return Author.findById(id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parentValue, args) {
        return Author.find({});
      }
    },
    version: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return '1.0.0';
      }
    }
  })
});

module.exports = RootQuery;
