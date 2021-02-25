import Post from '../components/post';
import { Query } from 'react-apollo';
import GET_POSTS_MOST_RECENT from '../queries/listRecent';
import client from '../client';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';

const PostWrapper = styled.button`
  font-size: 14px;
  padding: 0;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: white;
`;

export default function Recent() {
 
  return (
    <>
    <ApolloProvider client={client}>
        <PostWrapper>
      <Query query={GET_POSTS_MOST_RECENT}>
        {({loading, error, data}) => {

          let posts;
          data ? posts = data.posts.edges : error = true;

            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
              let list = posts.map(post => 
                <Post key={post.node.name} postInfo={post.node}/>,
              );
            if(data) return list;
          
        }}
        </Query>
        </PostWrapper>
    </ApolloProvider>
    </>
  )
}

