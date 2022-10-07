import { Footer, Header } from "@components/common";
import Homepage from "@components/Homepage";
import Lapndingpage from "@components/Lapndingpage";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Login from "@components/Login";
import Details from "@components/Details";
const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
<<<<<<< HEAD
      <Login />
      <Details />
=======
      {/* <Header />
      <Footer /> */}
      <Homepage/>
      {/* <Lapndingpage /> */}
      <Login/>
>>>>>>> 4165a69f7e1631aa45ea346d18cc52aa8fbf122a
    </Layout>
  );
};

export default Home;
