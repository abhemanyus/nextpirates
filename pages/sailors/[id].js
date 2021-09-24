import React from 'react'
import styles from '/styles/Home.module.css'
import Head from 'next/head';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    paths: data.map(sailor => ({params: {id: sailor.id.toString()}})),
    fallback: false
  }
}

export const getStaticProps = async ({params}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+params.id);
  const data = await res.json();
  return {
    props: {sailor: data}
  }
}

function Ship({sailor}) {
  return (
    <>
    <Head>
      <title key="title">Pirates | Sailor</title>
      <meta key="keywords" name="keywords" content="pirate,info,pirates,about,description,help"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>{sailor.name}</h1>
      <p>{sailor.username}</p>
      <p>{sailor.email}</p>
      <p>{sailor.address.city}</p>
      <p>{sailor.company.name}</p>
    </div>
    </>
  )
}

export default Ship
