import styles from '/styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title key="title">Pirates | Home</title>
      <meta key="keywords" name="keywords" content="ships,ship,pirates,pirate,sailing,yacht,boat,gangplank"/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur officiis nemo error aspernatur, dicta quos consectetur assumenda eum molestiae exercitationem facilis voluptates magni similique ea odit, mollitia officia excepturi?</p>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quos consequatur ducimus sit molestias fugit exercitationem nostrum cupiditate temporibus hic! Molestiae numquam quam atque officia nobis veritatis asperiores illo perferendis!</p>
      <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis dolor deserunt corporis magnam atque dolore, sint vitae optio ipsam expedita ad voluptatem dignissimos, molestiae veritatis tenetur! Nihil soluta doloremque reprehenderit!</p>
    </div>
    </>
  )
}
