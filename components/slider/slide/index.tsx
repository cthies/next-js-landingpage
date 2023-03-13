import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';

const Slide = (props: any) => {
    let classNames = props.slide.align === "right" ? styles.alignRight : "";
    classNames += props.slide.imageSrc === undefined ? styles.textCenter : "";
    classNames += props.theme ? styles[props.theme] : "";
    
    return (
        <div 
            className={`${styles.slide} ${classNames}`}
            id={props.slide.id}
        >
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

                <h2>{props.slide.title}</h2>
                <p>{props.slide.description}</p>
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