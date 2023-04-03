import Head from "next/head";
import SignUpForm from "@/app/components/SignUpForm";
import { DefaultPageProps } from "@/types";

const SignUp = ({ title, keywords, description }: DefaultPageProps) => {
  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name="robots" content="all" />
        <title>{title}</title>
      </Head>
      <SignUpForm />
    </>
  )
}

export default SignUp;

const StatisticsProps: DefaultPageProps = {
  title: 'Sign Up Page',
  keywords: 'web development, programming, Next.js',
  description: 'Sign Up',
}

export const getStaticProps = () => {
  return {
    props: {
      ...StatisticsProps
    },
  }
}
