// import Friends from '../Friends';
import Profile from '../Profile/Profile';
// import Statistics from '../Statistics';
// import Transactions from '../Transactions';
import { Container, Item } from '../App/App.style.css';

export const App = ({ data }) => (
  <Container>
    <Item>
      <Profile {...data.user} />
    </Item>
    {/* <Item> */}
      {/* <Statistics title="Upload stats" data={data.statistics} />
    </Item>
    <Item>
      <Friends data={data.friends} />
    </Item>
    <Item>
      <Transactions items={data.transactions} />
    </Item> */}
  </Container>
);
export default App;