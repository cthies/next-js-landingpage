import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';
import ArticleCard from '@/components/articleCard';

export default function ArticleSlider(props: any) {
    const { content, articles } = props;
    return (
        <div className="row">
            <h3 className={styles.headline}>{content.title}</h3>
            <div className={styles.articleSlider}>

                {articles.map((article: any, index: any) => {
                    return (
                        <ArticleCard{...article} key={index} />
                    );
                })}
            </div>
        </div>
    )
}