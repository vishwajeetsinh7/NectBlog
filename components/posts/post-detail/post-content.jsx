
import PostHeader from "./post-header"
import classes from './post-content.module.css'
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';



SyntaxHighlighter.registerLanguage('js', jsx)
SyntaxHighlighter.registerLanguage('css', css)

function PostContent(props) { 
    const {post} = props
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const customRenderers  = { 
        // img(image) { 
        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
        // },
        paragraph(paragraph){
            const {node} = paragraph
            if(node.children[0].type === 'img'){ 
                const image = node.children[0]

                return( <div className="classes.image">
                    return <Image src={`/images/posts/${post.slug}/${image.properties.src}`} alt={image.alt} width={600} 
                    height={300}
                    />
                </div>
                )
            }
            return <p>{this.paragraph.children}</p>
        }, 
        code(code) { 
            console.log(code, 'vish')
            const {language, children} = code
            return <SyntaxHighlighter 
                     style={atomDark} 
                     language='javascript'
                     >
                    {children}
                    </SyntaxHighlighter>
        }
    
   }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent