import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Slide = (slide: any) => {
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

                <ul className='margin-l-bottom'>
                    {slide.features.map((feature: any, index: any) => {
                        return (
                            <li key={index}>
                                <span>{feature}</span>
                            </li>
                        );
                    })}
                </ul>

                <Link href={slide.url} className='btn'>{slide.buttonLabel}</Link>
            </div>
        </div>
    )
}
export default Slide;