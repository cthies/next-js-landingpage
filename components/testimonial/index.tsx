import Person from '@/components/testimonial/person';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './index.module.css';

type TestimonialSliderProps = {
  slider: any;
};

const TestimonialSlider: React.FunctionComponent<TestimonialSliderProps> = (props) => {
  const { slider } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 980 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 979, min: 645 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    
    <div className={`row margin-xl-bottom ${styles.testimonials}`}>
      <h2 className={styles.headline}>{slider.title}</h2>
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay
        autoPlaySpeed={5000}
        showDots={false}
        infinite={false}
      >
        {slider.persons.map((person: any, index: any) => {
        return (
          <Person key={index} {...person} />
        );
      })}
      </Carousel>
    </div>
  )
}
export default TestimonialSlider;