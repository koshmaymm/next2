import Head from "next/head";
import ArticleLong from "@/app/components/ArticleLong";
import { DefaultPageProps } from "@/types";

const Home = ({ title, keywords, description }: DefaultPageProps) => {

  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name="robots" content="all" />
        <title>{title}</title>
      </Head>
      <ArticleLong />
    </>
  )
}

export default Home;

const StatisticsProps: DefaultPageProps = {
  title: 'Sustainability Page',
  keywords: 'web development, programming, Next.js',
  description: 'Sustainability',
}

export const getStaticProps = () => {
  return {
    props: {
      ...StatisticsProps
    },
  }
}
