import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './index.module.css';
import Slide from '@/components/slider/slide'

type SliderProps = {
  content: any;
  userName: string;
};

const Slider: React.FunctionComponent<SliderProps> = (props) => {
  const { content, userName } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 980 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 979, min: 645 },
      items: 1,
      slidesToSlide: 1,
      infinite: true,
      dots: true
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      infinite: true,
      dots: true
    }
  };
  return (
    <div className={`margin-xl-bottom ${styles.slider}`} id={content.id}>
       {userName &&
            <h2 className={`margin-xl-bottom ${styles.headline}`}>Hi {userName}, here are your benefits:</h2>
        }
      <Carousel
        responsive={responsive}
      >
        {content.slides.map((slide: any, index: any) => {
          return (
            <Slide key={index} slide={slide} theme="bright" />
          );
        })}
      </Carousel>
    </div>
  )
}
export default Slider;