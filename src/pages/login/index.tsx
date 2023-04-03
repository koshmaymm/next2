import Head from "next/head";
import LoginForm from "@/app/components/LoginForm";
import { DefaultPageProps } from "@/types";

const Login = ({ title, keywords, description }: DefaultPageProps) => {
  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name="robots" content="all" />
        <title>{title}</title>
      </Head>
      <LoginForm />
    </>
  )
}

export default Login;

const StatisticsProps: DefaultPageProps = {
  title: 'Login Page',
  keywords: 'web development, programming, Next.js',
  description: 'Login',
}

export const getStaticProps = () => {
  return {
    props: {
      ...StatisticsProps
    },
  }
}
