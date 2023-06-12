import React from 'react'
import { useNavigate } from 'react-router-dom';

import {logo, heroImg} from '../assets';
import styles from '../styles';

const pageHOC = (Component, title, description) => () => {
    const navigate = useNavigate();
  return (
    <div className={styles.hocContainer}>
        <div className={styles.hocContentBox}>

        </div>
    </div>
  )
}

export default pageHOC