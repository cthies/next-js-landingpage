import styles from './index.module.css';
import Link from 'next/link';
import Checklist from '@/components/checklist';

const Card = (post: any) => {
    return (
        <Link
            href={post.url}
            className={styles.card}
            rel="noopener noreferrer"
        >
            <h2>
                {post.title} <span className={styles.arrow}>&#10140;</span>
            </h2>
            <p className='margin-default-bottom'>
                {post.content}
            </p>
            
            <Checklist slide={post} theme='bright|dark' align='left'></Checklist>
        </Link>
    )
}
export default Card;