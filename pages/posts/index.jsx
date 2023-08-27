import { getAllPosts } from '@/lib/post-utils'
import AllPosts from  '../../components/posts/all-post'

const AllPostsPage = (props) => { 
    return <AllPosts  posts={props.posts}/>
}

export function getStaticProps() { 
  const allPosts = getAllPosts()

  return { 
    props: { 
      posts: allPosts
    }
  }
}

export default AllPostsPage