import Image from 'next/image'
import classes from './hero.module.css'
import MaxImage from '../../public/images/site/max.png'


const Hero = () => { 
    return ( 
        <section className={classes.hero}> 
            <div className={classes.image}>
                <Image 
                src={MaxImage} 
                alt='an Image showing mac'
                width={300} height={300}
                />
            </div>
            <h1>Him Max</h1>
            <p>I blog about web development - especially frontned frameworks like anglar or react. </p>
        </section>
    )
}

export default Hero