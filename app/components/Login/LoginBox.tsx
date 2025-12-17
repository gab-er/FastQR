"use client";

import styles from "./login.module.css";
import { loginSchema, loginFormData } from "@/app/schemas/login";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginBox = () => {
  const router = useRouter();
  // Initialize useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<loginFormData> = async (data) => {
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    console.log(res);

    if (!res.ok) {
      const result = await res.json();
      setError("root", {
        type: "server",
        message: result.error,
      });
    } else {
      // Redirect back to home page
      router.push("/");
    }
  };

  return (
    <div className={styles.containerWrapper}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <div className={styles.inputField}>
            <input
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <div className={styles.inputField}>
            <input
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
          </div>
          {errors.root && <p className={styles.error}>{errors.root.message}</p>}
        </div>
        <div className={styles.submitButton}>
          <button disabled={isSubmitting}>Submit</button>
        </div>
      </form>
      <div>
        Don't have an account?{" "}
        <Link className={styles.link} href="/register">
          Register here!
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
