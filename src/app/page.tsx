import styles from "@/components/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href=""> Resume Generator </Link>
        </h1>

        <p className={styles.description}>
          Easily create professional resumes with our resume builder.
        </p>

        <div className={styles.grid}>
          <Link href="/home" className={styles.card}>
            <h3> Create Link Resume; </h3>
            <p> Build your resume from one of the following templates. </p>
          </Link>
          <Link href="/home" className={styles.card}>
            <h3> Create resume without logging in</h3>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> ©2024 Resume Generator.All rights reserved. </p>
      </footer>
    </div>
  );
}
