import Head from 'next/head'
import Hero from '@/components/hero'
import TestimonialSlider from '@/components/testimonial'
import Slider from '@/components/slider'
import Slide from '@/components/slider/slide'
import styles from '@/styles/Home.module.css'
import content from '../data.json';
import Calculator from '@/components/calculator'
import { useState } from "react";
import ArticleSlider from '@/components/articleSlider'

export default function Home() {
  const [userName, setUserName] = useState("");
  const [goal, setGoal] = useState(1);

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        {content.content.map((slide: any, index: any) => {

          if (slide.type == 'hero') {
            return (
              <Hero slide={slide} key={index} />
            );
          }

          if (slide.type == 'testimonial') {
            return (
              <TestimonialSlider slider={slide} key={index} />
            );
          }

          if (slide.type == 'slider') {
            return (
              <Slider userName={userName} slider={slide} goal={goal} key={index} />
            );
          }

          if (slide.type == 'slide') {
            return (
              <Slide slide={slide} goal={goal} key={index} theme="dark" className="row" />
            );
          }

          if (slide.type == 'calculator') {
            return (
              <Calculator content={slide} userName={userName} setUserName={setUserName} goal={goal} setGoal={setGoal} key={index} />
            );
          }

          if (slide.type == 'articles') {
            return (
              <ArticleSlider content={slide} articles={content.articles} key={index} />
            );
          }
        })}

      </main>
    </>
  )
}
