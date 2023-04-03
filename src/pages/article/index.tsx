import Head from "next/head";
import TeslaArticlesTable from '@/app/components/TeslaArticlesTable';

export type ArticlePageProps = {
  title: string;
  keywords: string;
  description: string;
  articles?: any[];
  totalResults?: number;
}

const Article = ({ title, keywords, description, articles = [], totalResults = 0 }: ArticlePageProps) => {
  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name="robots" content="all" />
        <title>{`${title} ${totalResults}`}</title>
      </Head>
      <TeslaArticlesTable articles={articles} />
    </>
  )
}

export default Article;

export async function getServerSideProps() {
  const metaData = {
    title: 'Tesla Articles',
    keywords: 'web development, programming, Next.js',
    description: 'Articles',
  }

  try {
    const apiKey = "cbbc4e1fc350432ea2e2e3d22b6438c8";
    const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-03-03&sortBy=publishedAt&apiKey=${apiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const jsonData = await response.json();
    return { props: { ...jsonData, ...metaData } }
  } catch (error) {
    return { props: { ...metaData } }
  }
}







