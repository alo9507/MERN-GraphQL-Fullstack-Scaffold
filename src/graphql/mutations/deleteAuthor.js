import gql from 'graphql-tag';

export default gql`
  mutation($id: String) {
    deleteAuthor(id: $id) {
      name
    }
  }
`;
