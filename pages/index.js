import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I am Martin. I'm a growing programmer and developer who came from a 
          background in architecture and structural engineering. 
          You can contact me via <a href="mailto:martin.grym@gmail.com">email</a>.
        </p>
        <p>
          This is my personal website and blog. As I learn and discover fun things, I like to write about them here.
        </p>
      </section>
    </Layout>
  );
}