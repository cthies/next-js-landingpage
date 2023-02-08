import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';

const Hero = (content: any) => {
    return (
        <div className={styles.hero}>
        
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"

viewBox="0 0 50 50" className={styles.logo}>
<path d="M 17.226563 46.582031 C 17.105469 46.582031 16.984375 46.5625 16.871094 46.519531 C 7.976563 43.15625 2 34.507813 2 25 C 2 12.316406 12.316406 2 25 2 C 37.683594 2 48 12.316406 48 25 C 48 34.507813 42.023438 43.15625 33.128906 46.519531 C 32.882813 46.613281 32.605469 46.605469 32.363281 46.492188 C 32.121094 46.386719 31.933594 46.183594 31.839844 45.9375 L 26.890625 32.828125 C 26.695313 32.3125 26.953125 31.734375 27.472656 31.539063 C 30.179688 30.519531 32 27.890625 32 25 C 32 21.140625 28.859375 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 27.890625 19.820313 30.519531 22.527344 31.539063 C 23.046875 31.734375 23.304688 32.3125 23.109375 32.828125 L 18.160156 45.933594 C 18.066406 46.183594 17.878906 46.382813 17.636719 46.492188 C 17.507813 46.554688 17.367188 46.582031 17.226563 46.582031 Z"></path>
</svg>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    {content.title}
                </h1>
                <p>
                    {content.description}
                </p>
            </div>
        </div>
    )
}
export default Hero;