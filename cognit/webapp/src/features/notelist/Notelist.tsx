import { Notecard, NoteInfo } from "../notecard/Notecard";
import styles from "./Notelist.module.css";

type NotelistProps = {
  cards: NoteInfo[];
};

export function Notelist(props: NotelistProps) {
  let { cards } = props;

  return (
    <div className={styles.list}>
      {cards.map((card) => {
        return (
          <Notecard
            {...card}
            cardTapped={() => {
              console.log("Tapped ID %d", card.id);
            }}
          />
        );
      })}
    </div>
  );
}
