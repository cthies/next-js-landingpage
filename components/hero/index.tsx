import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';

const Hero = (content: any) => {
    return (
        <div className={styles.hero}>
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt={content.title}
              width={280}
              height={280}
              priority
            />
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