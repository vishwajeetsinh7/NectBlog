import FeaturedPost from '@/components/homepage/featured-post'
import Hero from '../components/homepage/hero'
import {getFeaturedPosts} from '../lib/post-utils'
import Head from 'next/head'


const HomePage = (props) => { 
  return (
    <>
    <Head>
      <title>NextBlogs</title>
      <meta name="description" content="i post about programming and developemnt" />
    </Head>
    <Hero/>
    <FeaturedPost posts={props.posts}/>
    </>
    
  )
}

export function getStaticProps(){ 
  const featuredPosts = getFeaturedPosts()

  return { 
    props:  { 
      posts: featuredPosts
    }, 
    revalidate:40
  }
}

export default HomePage