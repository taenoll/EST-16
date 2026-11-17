
import { getNoteItem } from '../api/getNote';
import './NoteDetailPage.css';


interface Props {
  noteId: number | null;
}

function NoteDetailPage({ noteId }: Props) {

  // noteId = 3;

  if (!noteId) return null;

  const note = getNoteItem(noteId);

  const createMarkup = () => {
    if(!note) return;
    return {__html : note?.content}
  }

  return (
    <div className="NoteDetailPage">
      {
        note && (
          <>
            <h2>{note.title}</h2>
            <span>{note.expand?.user.name}</span>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </>
        )
      }
    </div>
  );
}

export default NoteDetailPage;
