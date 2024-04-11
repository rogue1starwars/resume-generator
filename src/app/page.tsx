import styles from "@/components/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href=""> Resume Generator </a>{" "}
        </h1>

        <p className={styles.description}>
          Easily create professional resumes with our resume builder.{" "}
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3> Create a Resume & rarr; </h3>{" "}
            <p> Build your resume from one of the following templates. </p>{" "}
          </a>
          <a href="#" className={styles.card}>
            <h3> Download & Share & rarr; </h3>{" "}
            <p>
              {" "}
              Download your resume in PDF format and share it with employers.{" "}
            </p>{" "}
          </a>{" "}
        </div>
      </main>

      <footer className={styles.footer}>
        <p> ©2024 Resume Generator.All rights reserved. </p>{" "}
      </footer>
    </div>
  );
}
