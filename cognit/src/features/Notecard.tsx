import styles from "./Notecard.module.css";

export type NoteInfo = {
  id: number;
  title?: string;
  preview?: string;
};

type NotecardProps = NoteInfo & {
  cardTapped: VoidFunction;
};

export function Notecard(props: NotecardProps) {
  const { title, preview, cardTapped } = props;

  return (
    <div className={styles.card} onClick={cardTapped}>
      {title && <div className={styles.title}>{title}</div>}
      {preview && <div className={styles.preview}>{preview}</div>}
    </div>
  );
}
