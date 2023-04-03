import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/app/components/Layout";
import "../app/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
