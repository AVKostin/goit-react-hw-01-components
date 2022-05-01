import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import s from './Friends.module.css';

function Friends({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(frd => (
        <FriendsItem
          key={frd.id}
          avatar={frd.avatar}
          name={frd.name}
          isOnline={frd.isOnline}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Friends;