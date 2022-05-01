import PropTypes from 'prop-types';
import s from './Friends.module.css';
import OnlineLabel from './Friends.styled.jsx'

function FriendsItem({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
         <OnlineLabel isOnline={isOnline} />
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>

        </li>
    );
}

FriendsItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem;

// import PropTypes from 'prop-types';
// import s from './Friends.module.css';

// export default function FriendsItem({ avatar, name, isOnline }) {
//     return (
//         <li className={s.item}>
//          {isOnline && <span className={s.status}> online</span>}
//         <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
//         <p className={s.name}>{name}</p>

//         </li>
//     );
// }

// FriendsItem.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// };
