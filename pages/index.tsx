import Head from 'next/head'
import Hero from '@/components/hero'
import TestimonialSlider from '@/components/testimonial'
import Slider from '@/components/slider'
import Slide from '@/components/slider/slide'
import styles from '@/styles/Home.module.css'
import Calculator from '@/components/calculator'
import { useState, useEffect } from "react";
import ArticleSlider from '@/components/articleSlider'
import de from "../lang/de.json";
import en from "../lang/en.json";
import Link from 'next/link'

export default function Home() {
  /* defaults for user preferences */
  const [userName, setUserName] = useState('');
  const [goal, setGoal] = useState('1');
  const [content, setContent] = useState('en');
  let data = en;
  const [loading, setLoading] = useState(true);

  /*get saved preferences*/
  useEffect(() => {
    setUserName(localStorage.getItem('nextjs-bmi-username') || '' );
    setGoal(localStorage.getItem('nextjs-bmi-goal') || goal );
    setContent(localStorage.getItem('nextjs-bmi-lang') == 'de' ? 'de' : 'en' );
    setLoading(false);
  }, []);

  if (content === 'de') {
    data = de;
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${loading ? styles.loading : ''} ${styles.main}`}>
        {data.content.map((slide: any, index: any) => {

          if (slide.type == 'hero') {
            return (
              <Hero slide={slide} key={index} content={content} setContent={setContent} />
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
              <ArticleSlider content={slide} articles={data.articles} key={index} />
            );
          }
        })}

      </main>
      <footer>
        <Link href="/imprint">Imprint</Link>
        
      </footer>
    </>
  )
}
