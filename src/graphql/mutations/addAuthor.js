import gql from 'graphql-tag';

export default gql`
  mutation($name: String) {
    addAuthor(name: $name) {
      name
    }
  }
`;
