import Head from 'next/head';
import Hero from '../website/Hero'
import Utilities from '../website/Utilities'
import NavBar from '../website/NavBar'
import Footer from '../website/Footer'
import ShadySpanner from '../website/ShadySpanner';
import ShadyGrid from '../website/ShadyGrid';


const PrimaryLayout = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
     <Head>
      <title>The Shady Class
      </title>
      <meta name="description" content="The Shady Class" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-gradient-to-bl h-full w-full from-[#c31432] to-[#240b36]">
      <NavBar />
      <Hero />
      <ShadySpanner />
      <Utilities />
      <ShadyGrid />
      <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;