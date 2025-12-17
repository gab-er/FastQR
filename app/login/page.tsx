import LoginBox from "../components/Login/LoginBox";
import styles from "./loginpage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginBox />
    </div>
  );
};

export default LoginPage;