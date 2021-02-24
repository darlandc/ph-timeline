import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Post from './Post';

import GET_POSTS from '../queries/index';

const PostList = () => (
    <Query query={GET_POSTS}>
        {({loading, error, data}) => {

          let posts;
          data ? posts = data.posts.edges : error = true;

            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
              let list = posts.map(post => 
                <Post key={post.node.name} postInfo={post.node}/>
              );
            if(data) return list;
          
        }}
    </Query>
);

export default PostList;