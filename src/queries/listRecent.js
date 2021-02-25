import { gql } from '@apollo/client';

export const GET_POSTS_MOST_RECENT = gql`
query GET_POSTS_MOST_RECENT {
  posts(order: NEWEST) {
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


export default GET_POSTS_MOST_RECENT;
