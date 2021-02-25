import { gql } from '@apollo/client';

export const GET_POSTS_MOST_POPULAR = gql`
query GET_POSTS_MOST_POPULAR {
  posts(order: RANKING) {
    pageInfo{
      endCursor
    }
    edges {
      cursor,
      node {
        id,
        tagline,
        url,
        thumbnail{
          url
        }
        user{
          username,
        },
        votesCount,
        commentsCount,
        name,
        createdAt
      }
    }
  }
}
`;


export default GET_POSTS_MOST_POPULAR;
