import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';

const Slide = (props: any) => {
    return (
        <div className={`${props.slide.align === "right" ? styles.alignRight : ""} ${props.slide.imageSrc === undefined ? styles.textCenter : ""} ${styles.slide} ${props.theme ? styles[props.theme] : ""}`} id={props.slide.id}>
            {props.slide.imageSrc &&
                <div className={styles.imageWrapper}>
                    <Image
                        src={props.slide.imageSrc}
                        alt={props.slide.title}
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>
            }
            <div className={styles.content}>

                <h2 className='margin-l-bottom'>{props.slide.title}</h2>
                <p className='margin-l-bottom'>{props.slide.description}</p>
                {props.slide.features &&
                    <Checklist slide={props.slide} theme={props.theme || 'dark'} className='margin-l-bottom'></Checklist>
                }
                {props.slide.url &&
                    <Button href={props.slide.url} theme='primary' buttonLabel={props.slide.buttonLabel} />
                }
            </div>
        </div>
    )
}
export default Slide;