
import type { Note } from '../api/getNote';
import NoteList from '../components/NoteList';
import './NoteListPage.css';

interface Props {
  list: Note[];
  onChangeRoute: (nextRoute: string, pickNoteId: number) => void;
}

function NoteListPage({ list, onChangeRoute }: Props) {
  return (
    <div className="NoteListPage">
      <NoteList list={list} onChangeRoute={onChangeRoute} />
    </div>
  );
}

export default NoteListPage;
