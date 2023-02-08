import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';

const Slide = (slide: any) => {
    let button;
    if (slide.url) {
        button = <Button href={slide.url} theme='primary' buttonLabel={slide.buttonLabel} />;
    }

    let style = '';
    if (slide.align && slide.align === "right") {
        style = styles.alignRight;
    }
    return (
        <div className={`${style} ${styles.slide}`} id={slide.id}>
            <div className={styles.imageWrapper}>
            <Image
                src={slide.imageSrc}
                alt={slide.title}
                width={500}
                height={500}
                loading="lazy"
            />
            </div>
            <div className={styles.content}>

                <h2 className='margin-l-bottom'>{slide.title}</h2>
                <p className='margin-l-bottom'>{slide.description}</p>
                <Checklist slide={slide} theme='dark' className='margin-l-bottom'></Checklist>
                {button}
            </div>
        </div>
    )
}
export default Slide;