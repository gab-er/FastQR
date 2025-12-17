"use client";

import styles from "./register.module.css";
import { registerSchema, RegisterFormData } from "@/app/schemas/register";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const RegisterBox = () => {
  const router = useRouter();
  // Initialize useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    const res = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const result = await res.json();
      setError("email", {
        type: "server",
        message: result.error,
      });
    } else {
      // Redirect back to home page
      router.push("/");
    }
  };

  return (
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
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
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
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="confirm password">Confirm Password</label>
        <div className={styles.inputField}>
          <input
            id="confirm password"
            placeholder="Confirm your password"
            {...register("confirmPassword", { required: true })}
          />
        </div>
        {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
      </div>

      <div className={styles.submitButton}>
        <button disabled={isSubmitting}>Submit</button>
      </div>
    </form>
  );
};

export default RegisterBox;
