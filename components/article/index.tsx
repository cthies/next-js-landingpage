import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Article = (content: any) => {
    return (
        <div className={styles.article}>
            <div className={styles.imageWrapper}>
                <Image src={content.image} alt={content.title}
                    fill />
            </div>

            <div className={styles.content}>
                <h1>{content.title}</h1>
                <p>{content.description}</p>

                <div dangerouslySetInnerHTML={{ __html: content.detail }}></div>
                <Link href="/">Back</Link>      
            </div>
        </div>
    )
}
export default Article;