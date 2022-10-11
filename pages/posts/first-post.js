import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        This is where I would write a first post if I had a first post ready to write. :P
      </p>
    </Layout>
  );
}