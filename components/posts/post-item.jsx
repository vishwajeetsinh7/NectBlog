import Link from 'next/link'
import classes from './post-item.module.css'
import Image from 'next/image'



const PostItem = (props) => { 
    const {title, image, except, date, slug} = props.post
    const formattedDate =  new Date(date).toLocaleDateString('en-US', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
    })
    const imagePath = `/images/posts/${slug}/${image}`
    
    const linkPath = `/posts/${slug}`

    return ( 
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200}/>
                    {/* <img src={imagePath} alt="" /> */}
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{except}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem