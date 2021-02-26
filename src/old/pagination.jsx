import { useEffect, useState } from 'react'
import { Query } from 'react-apollo';
import GET_POSTS_MOST_RECENT from '../queries/recent';
import GET_POSTS_MOST_POPULAR from '../queries/popular';
import Post from './post';

export default function GetPaginationList(category, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setPosts([])
  }, [category])

  useEffect(() => {

    // setPosts(prevPosts => {
    //   return [...new Set([...prevPosts, ...data.docs.map(b => b.title)])]
    // })
      
  }, [category, pageNumber])

  return { loading, error, posts, hasMore, }
}
