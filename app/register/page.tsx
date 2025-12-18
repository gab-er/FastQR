import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterBox from "../components/Register/RegisterBox";
import styles from "./registerpage.module.css";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className={styles.container}>
      <RegisterBox />
    </div>
  );
};

export default RegisterPage;
