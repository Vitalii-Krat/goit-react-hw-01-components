import Section from './componets/Section/Section';
import Profile from './componets/Profile/Profile/Profile';
import Statistics from './componets/Statistics/Statistics/Statistics';
import FriendList from './componets/FriendList/FriendList/FriendList';
import TransactionHistory from './componets/TransactionHistory/TransactionHistory/TransactionHistory';

import user from './data/user';
import data from './data//data';
import friends from './data/friends';
import transactions from './data/transactions';

function App() {
  return (
    <div>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friendsData={friends} />
      </Section>
      <Section>
        <TransactionHistory data={transactions} />
      </Section>
    </div>
  );
}

export default App;
