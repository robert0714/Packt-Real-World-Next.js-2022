import Link from 'next/link';
import axios from 'axios';
import https from 'https'

export async function getServerSideProps() {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })
  axios.defaults.httpsAgent = httpsAgent
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/04/users`);

  return {
    props: {
      users: data,
    },
  };
}

function HomePage({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.username}`} passHref>
             {user.username} 
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
