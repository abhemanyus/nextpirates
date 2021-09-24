import styles from '/styles/Home.module.css'
import React from 'react';
import Head from 'next/head';

function About() {
  return (
    <>
    <Head>
      <title key="title">Pirates | About</title>
      <meta key="keywords" name="keywords" content="pirate,info,pirates,about,description,help"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur officiis nemo error aspernatur, dicta quos consectetur assumenda eum molestiae exercitationem facilis voluptates magni similique ea odit, mollitia officia excepturi?</p>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quos consequatur ducimus sit molestias fugit exercitationem nostrum cupiditate temporibus hic! Molestiae numquam quam atque officia nobis veritatis asperiores illo perferendis!</p>
      <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolor deserunt corporis magnam atque dolore, sint vitae optio ipsam expedita ad voluptatem dignissimos, molestiae veritatis tenetur! Nihil soluta doloremque reprehenderit!</p>
    </div>
    </>
  )
}

export default About
