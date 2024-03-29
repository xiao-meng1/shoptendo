import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';

import { selectApiIsConnected } from '../redux/slices/apiSlice';
import testApiConnection from '../redux/thunks/testApiConnection';
import gamesImage from '../assets/images/switch_games.jpg';

function Home() {
  const dispatch = useDispatch();
  const apiIsConnected = useSelector(selectApiIsConnected);

  useEffect(() => {
    if (!apiIsConnected) {
      dispatch(testApiConnection());
    }
  }, []);

  return (
    <div className={styles.container}>
      <article className={styles.left}>
        <h3 className={styles.h3}>BEST ONLINE STORE OF THE YEAR</h3>
        <h2 className={styles.h2}>
          We have the best games at the lowest prices
        </h2>
        <Link to="/store" className={styles.button}>
          Shop now
        </Link>
      </article>
      <img className={styles.hero} src={gamesImage} alt="video games" />
    </div>
  );
}

export default Home;
