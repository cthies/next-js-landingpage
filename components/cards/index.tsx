import Card from '@/components/cards/card';
import styles from './index.module.css';

export default function Cards(content: any) {
  return (
    <div className={styles.grid}>
      {content.cards.map((post: any, index: any) => {
        return (
          <Card key={index} {...post} />
        );
      })}
    </div>
  )
}


