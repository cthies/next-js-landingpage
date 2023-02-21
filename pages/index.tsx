import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/hero'
import Cards from '@/components/cards'
import Slider from '@/components/slider'
import Slide from '@/components/slider/slide'
import styles from '@/styles/Home.module.css'
import content from '../data.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>nextJS Landingpage </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      {content.content.map((slide: any, index: any) => {

        if(slide.type == 'hero') {
          return (
            <Hero {...slide} key={index} />
          );
        }

        if(slide.type == 'summary') {
          return (
            <Cards {...slide} key={index} />
          );
        }

        if(slide.type == 'slider') {
          return (
            <Slider content={slide} key={index} />
          );
        }

        if(slide.type == 'slide') {
          return (
            <Slide slide={slide} key={index} />
          );
        }
      })}
        
        
      </main>
    </>
  )
}
