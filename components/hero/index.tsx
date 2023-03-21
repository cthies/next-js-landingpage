import styles from './index.module.css';
import Image from 'next/image';
import Button from '@/components/button';
import LanguageSwitcher from '@/components/languageSwitcher';

type HeroProps = {
    slide: any;
    content: any;
    setContent: any;
  };
  
  const Hero: React.FunctionComponent<HeroProps> = (props) => {
    const { slide, content, setContent } = props;
  
    return (
        <div className={styles.hero}>
            <LanguageSwitcher content={content} setContent={setContent} />
            <Image
                    src={slide.image}
                    alt={slide.title}
                    width={500}
                    height={500}
                    className={styles.logo}
                    priority={true}
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