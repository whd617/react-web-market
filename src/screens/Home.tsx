import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [readSearchParams, setSearchParmas] = useSearchParams();
  console.log(readSearchParams.get('geo'));
  setTimeout(() => {
    setSearchParmas({
      day: 'today',
      tomorrow: '123',
    });
  }, 3000);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
