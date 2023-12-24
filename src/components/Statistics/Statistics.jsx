import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={`${css.txtwrapper} ${css.firstwrapper}`}>
        <p className={css.txt}>
          Good:<span className={css.txtspan}>{good}</span>
        </p>
        <p className={css.txt}>
          Nuetral:<span className={css.txtspan}>{neutral}</span>
        </p>
        <p className={css.txt}>
          Bad:<span className={css.txtspan}>{bad}</span>
        </p>
      </div>

      <div className={`${css.txtwrapper} ${css.secondwrapper}`}>
        <p className={css.txt}>
          Total:<span className={css.txtspan}>{total}</span>
        </p>
        <p className={css.txt}>
          Positive feedback:
          <span className={css.txtspan}>{positivePercentage}%</span>
        </p>
      </div>
    </>
  );
};

export default Statistics;
