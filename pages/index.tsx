/*import type { GetServerSideProps, NextPage } from 'next'
import redis from '../lib/redis'

interface HomeProps {
  visits: number;
}

const Home: NextPage<HomeProps> = ({ visits }) => {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This page has been visited {visits} times.</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let visits = await redis.get('visits');
  if (!visits) {
    await redis.set('visits', '1');
    visits = '1';
  } else {
    visits = String(parseInt(visits) + 1);
    await redis.set('visits', visits);
  }

  return { 
    props: { 
      visits: parseInt(visits) 
    } 
  };
}

export default <Home>*/

// /my-nextjs-app/pages/index.tsx
import { useEffect, useState } from 'react';
import { fetchData } from '../lib/dataFetcher';

const HomePage = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
