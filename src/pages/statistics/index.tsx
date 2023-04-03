import Head from "next/head";
import StatisticTable from '@/app/components/StatisticTable';
import { DefaultPageProps } from "@/types";

const Statistics = ({ title, keywords, description }: DefaultPageProps) => {
  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name="robots" content="all" />
        <title>{title}</title>
      </Head>
      <StatisticTable />
    </>
  )
}

export default Statistics;

const StatisticsProps: DefaultPageProps = {
  title: 'Statistics Page',
  keywords: 'web development, programming, Next.js',
  description: 'Some Statistics',
}

export const getStaticProps = () => {
  return {
    props: {
      ...StatisticsProps
    },
  }
}
