import styles from './index.module.css';
import Link from 'next/link';

const Imprint = (content: any) => {
    return (
        <div className={styles.imprint}>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <Link href="/">Back</Link>
        </div>
    )
}
export default Imprint;