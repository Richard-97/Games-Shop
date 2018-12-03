import gql from 'graphql-tag';

export default gql`
query allGames {
    games{
        name,
        genre
    }
}
`;