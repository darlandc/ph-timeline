import React, { useState, useRef, useCallback } from 'react'
import GetPaginationList from './pagination'
import Post from './post';
import { Query } from 'react-apollo';
import GET_POSTS_MOST_RECENT from '../queries/index';
import client from '../client';
import { ApolloProvider } from 'react-apollo';

export default function InfinitList() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    posts,
    hasMore,
    loading,
    error
  } = GetPaginationList(query, pageNumber)

  const observer = useRef()
  const lastPostElementRef = useCallback(node => {
    // if (loading) return
    // if (observer.current) observer.current.disconnect()
    // observer.current = new IntersectionObserver(entries => {
    //   if (entries[0].isIntersecting && hasMore) {
    //     setPageNumber(prevPageNumber => prevPageNumber + 1)
    //   }
    // })
    // if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
    <ApolloProvider client={client}>
      <Query query={GET_POSTS_MOST_RECENT}>
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
    </ApolloProvider>

      {/* <input type="text" value={query} onChange={handleSearch}></input>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return <div ref={lastPostElementRef} key={post}>{post}</div>
        } else {
          return <div key={post}>{post}</div>
        }
      })} */}
      {/* <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div> */}
    </>
  )
}

