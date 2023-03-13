import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './index.module.css';
import Slide from '@/components/slider/slide'

type SliderProps = {
  slider: any;
  userName: string;
};

const Slider: React.FunctionComponent<SliderProps> = (props) => {
  const { slider, userName } = props;

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

  //set Headline if userName was given in calculator
  let headlineTag;
  if (userName) {
    let greeting = slider.greeting.replace("%s", userName);
    headlineTag = <h2 className={`margin-xl-bottom ${styles.headline}`}>{greeting}</h2>;
  }

  return (
    <div className={`margin-xl-bottom ${styles.slider}`} id={slider.id}>
      {headlineTag}
      <Carousel
        responsive={responsive}
      >
        {slider.slides.map((slide: any, index: any) => {
          return (
            <Slide key={index} slide={slide} theme="bright" />
          );
        })}
      </Carousel>
    </div>
  )
}
export default Slider;