import styles from "./Notecard.module.css";

type NotecardProps = {
  title: string;
  preview: string;
  cardTapped: VoidFunction;
};

export function Notecard(props: NotecardProps) {
  const { title, preview, cardTapped } = props;

  return (
    <div className={styles.card} onClick={cardTapped}>
      {title.length ? <div className={styles.title}>{title}</div> : ""}
      {preview.length ? <div className={styles.preview}>{preview}</div> : ""}
    </div>
  );
}
