import Head from 'next/head'
import ImprintContent from '@/components/imprint'
import styles from '@/styles/Home.module.css'
import content from '../data.json';
import { useState } from "react";

export default function Imprint() {
  return (
    <>
      <Head>
        <title>{content.title} Imprint</title>
        <meta name="description" content={content.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {content.content.map((slide: any, index: any) => {

          if (slide.type == 'imprint') {
            return (
              <ImprintContent {...slide} key={index} />
            );
          }
        })}
      </main>
    </>
  )
}
