import { gql } from "@apollo/client";

const GET_ALL_GENRE = gql`
    query {
        genres {
            name
            img
            slug
        }
    }
`;

export { GET_ALL_GENRE};