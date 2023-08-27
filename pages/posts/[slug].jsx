import PostContent from "@/components/posts/post-detail/post-content"
import { getPostData, getPostsFiles } from "@/lib/post-utils"


const PostDetailPage = (props) => { 
    return ( 
        <div> 
            <PostContent post={props.post} /> 
        </div>
    )
}

export function getStaticProps(context) { 
    const {params} = context
    const {slug} = params

    const postData = getPostData(slug)
    return { 
        props:  { 
            post: postData
        }, 
        revalidate: 600
    }
}

export function getStaticPaths() { 

    const postFilesnames = getPostsFiles()
    const slugs = postFilesnames.map(fileName => fileName.replace(/\.md$/, ''))

    return { 
        paths: slugs.map(slug => ({params: {slug: slug}})), 
        fallback: false
    }
}


export default PostDetailPage