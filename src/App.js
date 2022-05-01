import user from './components/data/user.json';
import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import Transactions from './components/Transactions/Transactions';
import Friends from 'components/Friends/Friends';
import data from './components/data/data.json';
import friends from 'components/data/friends.json';
import transactions from './components/data/transactions.json';
import s from './components/Container/Container.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}
