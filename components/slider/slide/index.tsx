import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Checklist from '@/components/checklist';
import Button from '@/components/button';

type SlideProps = {
    slide: any;
    theme: string;
    goal: string;
    className: string;
};

const Slide: React.FunctionComponent<SlideProps> = (props) => {
    const { slide, theme, goal, className } = props;

    const classNames = [
        slide.align === "right" ? styles.alignRight : '',
        slide.imageSrc === undefined ? styles.textCenter : '',
        theme != undefined ? styles[props.theme] : '',
        className != undefined ? className : ''
    ].join(" ");

    //set goal depending content
    let headline = <h2>{slide.title}</h2>;
    if (goal && goal == '2' && slide.titleWeight) {
        headline = <h2>{slide.titleWeight}</h2>;
    }

    return (
        <div
            className={`${styles.slide} ${classNames}`}
            id={slide.id}
        >
            {slide.imageSrc &&
                <div className={styles.imageWrapper}>
                    <Image
                        src={slide.imageSrc}
                        alt={slide.title}
                        width={500}
                        height={500}
                        loading="lazy"
                    />
                </div>
            }
            <div className={styles.content}>
                {headline}

                <p>{props.slide.description}</p>
                {slide.features &&
                    <Checklist slide={slide} theme={theme || 'dark'} className='margin-l-bottom'></Checklist>
                }
                {props.slide.url &&
                    <Button href={slide.url} theme='primary' buttonLabel={slide.buttonLabel} />
                }
            </div>
        </div>
    )
}
export default Slide;