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

export function FormInput({ id, label, type }: TextFieldProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext();

  return (
    <label htmlFor={id} className={styles.label}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        {...register(id, { onChange: () => trigger(id) })}
      />
      <span className={styles.error}>{errors[id]?.message}</span>
    </label>
  );
}
