import user from './data/user.json';
import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <div>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

//  <Statistics title="Upload stats" data={data} />
//     <FriendList friends={friends} />
//     <Statistics data={data} />
//     <TransactionHistory items={transactions} />
