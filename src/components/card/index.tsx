import styles from "./styles.module.css";

export function Card({ name }: { name: string }) {
  const mozillaUrl = `https://developer.mozilla.org/ja/docs/Web/HTML/Element/${name}`;

  return (
    <a
      href={mozillaUrl}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <p>{name}</p>
    </a>
  );
}
