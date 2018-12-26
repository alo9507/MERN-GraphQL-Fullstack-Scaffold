const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const Author = require('../models/author');
const AuthorType = require('./types/authorType');

const PostType = require('./types/postType');
const Post = require('../models/post');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
        return (new Author({ name })).save();
      }
    }
  }
});

module.exports = mutation;
