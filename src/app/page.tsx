"use client"
import { Header, } from "@/components";
import styles from './page.module.css'

export default function Home() {

  return (
    <div className={styles.homeContainer}>
      <Header></Header>
      <div className={styles.main}>Home</div>
    </div>
  );
}
