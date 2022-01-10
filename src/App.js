import Section from './componets/Section/Section';
import Profile from './componets/Profile/Profile/Profile';
import Statistics from './componets/Statistics/Statistics/Statistics';
import FriendList from './componets/FriendList/FriendList/FriendList';
import TransactionHistory from './componets/TransactionHistory/TransactionHistory/TransactionHistory';

import user from './componets/Profile/user';
import data from './componets/Statistics/data';
import friends from './componets/FriendList/friends';
import transactions from './componets/TransactionHistory/transactions';

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
