import styles from "./styles.module.css";
import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  /**
   * The id of the input element
   */
  id: string;

  /**
   * The label of the input element
   */
  label: string;

  /**
   * The type of the input element
   */
  type: HTMLInputElement["type"];
};

type FormData = {
  /**
   * This is the value of the form
   */
  element: string;
};

export function Input({ id, label, type }: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <label htmlFor={id} className={styles.label}>
      <span>{label}</span>
      <input id={id} type={type} {...register(id)} />
      <span className={styles.error}>{errors.element?.message}</span>
    </label>
  );
}
