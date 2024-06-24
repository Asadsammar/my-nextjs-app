import type { GetServerSideProps, NextPage } from 'next'
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

export default Home