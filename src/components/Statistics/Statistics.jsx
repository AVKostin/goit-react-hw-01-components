import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import randomColor from '../../data/hexRandomColor';
// const randomColor = () => 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';

function Statistics({ title, data }) {
    return (
    <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.list}>
            {data.map(item => (
                <li
                    className={s.item}
                    key={item.id}
                    style={{ backgroundColor: randomColor() }}
                >
                    <span className={s.label}>{item.label}</span>
                    <span className={s.percentage}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
    );
};

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };
