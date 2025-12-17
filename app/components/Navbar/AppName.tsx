import Link from "next/link";
import styles from "./navbar.module.css";

const AppName = () => {
  return (
    <div className={styles.appName}>
      <Link href="/">FastQR </Link>
    </div>
  );
};

export default AppName;
