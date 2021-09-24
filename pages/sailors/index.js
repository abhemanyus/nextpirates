import React from 'react'
import styles from '/styles/Home.module.css';
import sailorStyles from '/styles/Sailors.module.css';
import Link from 'next/link';
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {sailors: data}
  }
}

function Ahoy({sailors}) {
  return (
    <>
    <Head>
      <title key="title">Pirates | Sailors</title>
      <meta key="keywords" name="keywords" content="pirate,info,pirates,sailors,community"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Ahoy!</h1>
      <ul className={sailorStyles.list}>
        {sailors.map(sailor => (
          <li key={sailor.id} className={sailorStyles.list_item}>
          <Link href={"/sailors/"+sailor.id}>
            <a>{sailor.name}</a>
          </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Ahoy
