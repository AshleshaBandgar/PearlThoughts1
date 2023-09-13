import React from 'react';
import styles from './search.module.css';


export default function Search(){
  return (
    <div className={styles.main}>
         <div classname={styles.container}>
            <input placeholder='Enter Here'
                   type='text'
            />
           <button>Search</button>
             </div>
        </div>

  )
}
