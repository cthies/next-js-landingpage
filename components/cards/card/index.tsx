import styles from './index.module.css';
import Link from 'next/link';
import Checklist from '@/components/checklist';

const Card = (post: any) => {
    return (
        <Link
            href={post.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2>
                {post.title} <span className={styles.arrow}>&#10140;</span>
            </h2>
            <p>
                {post.content}
            </p>
            
            <ol>
                {post.features.map((feature: any, index: any) => {
                    return (
                        <li key={index}>
                            <span>{feature}</span>
                        </li>
                    );
                })}
            </ol>
        </Link>
    )
}
export default Card;