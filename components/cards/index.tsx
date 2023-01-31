import Card from '@/components/cards/card';
import styles from './index.module.css';

export default function Cards(props: any) {
  return (
    <div className={styles.grid}>
      {props.content.map((post: any, index: any) => {
        return (
          <Card key={index} {...post} />
        );
      })}
    </div>
  )
}


