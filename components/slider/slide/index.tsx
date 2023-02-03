import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';

const Slide = (slide: any) => {
    let button;
    if (slide.url) {
        button = <Link href={slide.url} className='btn'>{slide.buttonLabel}</Link>;
    }
    return (
        <div className={styles.slide}>
            <Image
                src={slide.imageSrc}
                alt={slide.title}
                width={500}
                height={500}
                loading="lazy"
            />
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