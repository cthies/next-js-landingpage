import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';

const Hero = (content: any) => {
    return (
        <div className={styles.hero}>
            <Image src={content.image} alt={content.title} className={styles.logo} 
                   width="500" height="500"/>
            <div className={styles.content}>
                <span className={styles.badge}>
                    {content.badge}
                </span>
                <h1 className={styles.headline}>
                    {content.title}
                </h1>
                <p className="margin-default-bottom">
                    {content.description}
                </p>
                <Button href={content.url} theme='primary' buttonLabel={content.buttonLabel} />
            </div>
        </div>
    )
}
export default Hero;