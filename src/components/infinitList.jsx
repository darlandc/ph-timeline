import React, { useState, useRef, useCallback } from 'react'
import GetPaginationList from './pagination'
import Post from './post';
import { Query } from 'react-apollo';
import GET_POSTS_MOST_RECENT from '../queries/index';
import client from '../client';
import { ApolloProvider } from 'react-apollo';
import TabGroup from './tabs';

export default function InfinitList() {
  const [category, setCategory] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    posts,
    hasMore,
    loading,
    error
  } = GetPaginationList(category, pageNumber)

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
    //y(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
    <ApolloProvider client={client}>
    <TabGroup/>
      <Query query={GET_POSTS_MOST_RECENT}>
        {({loading, error, data}) => {

          let posts;
          data ? posts = data.posts.edges : error = true;

          {/* setCategory('MOST_RECENT');
          setPageNumber(1) */}

            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error :(</p>;
              let list = posts.map(post => 
                <Post key={post.node.name} postInfo={post.node}/>
              );
            if(data) return list;
          
        }}
        </Query>
    </ApolloProvider>
    </>
  )
}

