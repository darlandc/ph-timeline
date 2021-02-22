import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Post from './Post';

console.log(2)

const PostList = () => (
    <Query query={gql`
        {
            Post {
                title
            }
        }
    `}
    >
        {({loading, error, data}) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
            
            return data.allPosts.map((currentPost) => (
                <Post post={currentPost} />
            ));
        }}
    </Query>
);

export default PostList;