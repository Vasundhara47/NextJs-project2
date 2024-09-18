"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button, Card } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <Card>
        <Button><Link href={'/login'} className={styles.link}>Log In</Link></Button>
        <br></br>
        <Button><Link href={'/signup'} className={styles.link}>Sign Up</Link></Button>
      </Card>
    </div>
  );
}
