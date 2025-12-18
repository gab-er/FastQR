import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LoginBox from "../components/Login/LoginBox";
import styles from "./loginpage.module.css";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <LoginBox />
    </div>
  );
};

export default LoginPage;
