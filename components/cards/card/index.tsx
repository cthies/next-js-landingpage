import styles from './index.module.css';
import Image from 'next/image';

const Card = (person: any) => {
    return (
        <div className={styles.card}>
            {person.img &&
                <div className={styles.imageWrapper}>
                    <Image
                        src={person.img}
                        alt={person.name}
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>
            }
            <h2>
                {person.name}
            </h2>
            <span className={`margin-default-bottom ${styles.quote}`}>
                <span className={styles.quotation}>&ldquo;</span>
                {person.quote}
                <span className={`${styles.end} ${styles.quotation}`}>&rdquo;</span> 
            </span>
        </div>
    )
}
export default Card;