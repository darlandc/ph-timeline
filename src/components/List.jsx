// import React from 'react';
// import Post from './post';
// import { Query } from 'react-apollo';
// import GET_POSTS_MOST_RECENT from '../queries/index';

// const PostList = () => (
//     <Query query={GET_POSTS_MOST_RECENT}>
//         {({loading, error, data}) => {

//           let posts;
//           data ? posts = data.posts.edges : error = true;

//             if (loading) return <p>Loading ...</p>;
//             if (error) return <p>Error :(</p>;
//               let list = posts.map(post => 
//                 <Post key={post.node.name} postInfo={post.node}/>
//               );
//             if(data) return list;
          
//         }}
//     </Query>
// );

// export default PostList;