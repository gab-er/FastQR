import QRDisplay from "./components/QRDisplay";
import QRForm from "./components/QRForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <QRForm />
      </div>
      <div className={styles.display}> 
      <QRDisplay />
      </div>
    </div>
  );
}
