import styles from './index.module.css';
import Image from 'next/image';
import Button from '@/components/button';

type HeroProps = {
    slide: any;
  };
  
  const Hero: React.FunctionComponent<HeroProps> = (props) => {
    const { slide } = props;
  
    return (
        <div className={styles.hero}>
            <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                    loading="lazy"
                    className={styles.logo}
                />
            <div className={styles.content}>
                <span className={styles.badge}>
                    {slide.badge}
                </span>
                <h1 className={styles.headline}>
                    {slide.title}
                </h1>
                <p className="margin-default-bottom">
                    {slide.description}
                </p>
                <Button href={slide.url} theme='primary' buttonLabel={slide.buttonLabel} />
            </div>
        </div>
    )
}
export default Hero;