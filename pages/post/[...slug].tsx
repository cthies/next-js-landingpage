import { useRouter } from 'next/router'
import Head from 'next/head'
import content from "../../lang/en.json";

import Article from '@/components/article'

const Post = () => {
    const router = useRouter()
    const slug = (router.query.slug as string[]) || []

    return (
        <>
            <Head>
                <title>{content.title} Imprint</title>
                <meta name="description" content={content.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {content.articles.map((slide: any, index: any) => {
                    if (slide.slug == slug.join('/')) {
                        return <Article {...slide} key={index} />;
                    }
                })}
            </main>

        </>
    )
}

export default Post