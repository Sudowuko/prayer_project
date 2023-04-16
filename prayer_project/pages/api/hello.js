// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

import { query } from './components/Users.js';

export default function MyPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { rows } = await query('SELECT * FROM users');
  return { props: { users: rows } };
}
