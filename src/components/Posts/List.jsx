import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Post from './Post';

console.log(2)

const PostList = () => (
    <Query query={gql`
 query {
 posts(order: VOTES) {
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
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
              const posts = data.posts.edges;
              let list = posts.map(post => 
                <Post key={post.node.name} postInfo={post.node}/>
              );
            if(data) return list;
          
        }}
    </Query>
);

export default PostList;