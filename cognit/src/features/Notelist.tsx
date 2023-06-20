import { Notecard, NoteInfo } from "./Notecard";
import styles from "./Notelist.module.css";

type NotelistProps = {
  cards: NoteInfo[];
};

export function Notelist(props: NotelistProps) {
  const { cards } = props;

  return (
    <div className={styles.list}>
      {cards.map((card) => {
        return (
          <Notecard
            {...card}
            cardTapped={() => {
              console.log("Tapped ID %d", card.id);
            }}
            key={card.id}
          />
        );
      })}
    </div>
  );
}
