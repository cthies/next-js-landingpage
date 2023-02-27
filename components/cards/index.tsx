import Card from '@/components/cards/card';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './index.module.css';

export default function Cards(props: any) {
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
    <div className={`margin-xl-bottom ${styles.cards}`}>
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay
        autoPlaySpeed={5000}
        showDots={false}
        infinite
      >
        {props.persons.map((person: any, index: any) => {
        return (
          <Card key={index} {...person} />
        );
      })}
      </Carousel>
    </div>
  )
}