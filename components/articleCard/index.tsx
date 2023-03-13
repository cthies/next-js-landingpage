import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';

const Article = (content: any) => {
    return (
        <Link href={`/post/${encodeURIComponent(content.slug)}`} className={styles.article}>
            <div className={styles.imageWrapper}>
                <Image src={content.image} alt={content.title} className={styles.logo} 
                    width="500" height="500"/>
            </div>
            <div className={styles.content}>
                <h4>{content.title}</h4>
                <p>{content.description}</p>
            </div>
        </Link>
    )
}
export default Article;