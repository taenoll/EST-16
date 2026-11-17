import { getNoteItem } from '../api/getNote'
import './NoteDetailPage.css'




interface Props {
  noteId: number | null;
}



function NoteDetailPage({noteId}:Props) {

  // noteId = null;
  

  if( !noteId ) return <p role="alert" className='printError'> ❌ 이런! 노트 정보를 불러오지 못했습니다! </p>;

  const note = getNoteItem(noteId);

  const createMarkup = () => {
    if(!note) return;
    return {__html : note.content}
  }

  return (
    <div className='NoteDetailPage'>
      {!note && <p role="alert" className='printError'> ❌ 이런! 노트 정보를 불러오지 못했습니다! </p>}
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
  )
}
export default NoteDetailPage