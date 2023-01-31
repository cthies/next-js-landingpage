import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './index.module.css';
import Slide from '@/components/slider/slide'

export default function Slider(props: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 980 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 980, min: 464 },
      items: 2,
      slidesToSlide: 2
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

    <Carousel
      responsive={responsive}
      className={styles.slider}
    >
      {props.content.map((slide: any, index: any) => {
        return (
          <Slide key={index} {...slide} />
        );
      })}
    </Carousel>
  )
}