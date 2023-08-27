import classes from './featured-post.module.css'
import PostGrid from '../posts/posts-grid'

const FeaturedPost = (props) => { 
    return( 
        <section className={classes.latest}>
            <h2>Featured Post</h2>
            <PostGrid posts={props.posts}/>
        </section>
    )
}

export default FeaturedPost