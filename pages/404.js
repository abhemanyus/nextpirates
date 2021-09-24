import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from '/styles/Home.module.css';

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    },
    3000)
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page not found</h1>      
      <p className={styles.description}>The page you request is either not available or does not exists</p>
      <p className={styles.description}>Redirecting you in 3 seconds...</p>
    </div>
  )
}

export default NotFound
