import { gql } from '@apollo/client';

export const GET_POSTS_MOST_RECENT = gql`
query GET_POSTS_MOST_RECENT($cursor: String) {
  posts(after: $cursor, order: NEWEST) {
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

export const GET_POSTS_MOST_POPULAR = gql`
query GET_POSTS_MOST_POPULAR($cursor: String) {
  posts(after: $cursor, order: NEWEST) {
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


export default GET_POSTS_MOST_RECENT && GET_POSTS_MOST_POPULAR;
