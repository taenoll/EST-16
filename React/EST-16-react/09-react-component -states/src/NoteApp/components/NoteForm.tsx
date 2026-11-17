import './NoteForm.css'

function NoteForm() {

  return (
    <form className="NoteForm">
      
        <div className="formControl">
          <label htmlFor="a-10">제목</label>
          <input type="text" id="a-10" name="title" />
        </div>

        <div className="formControl">
          <label htmlFor="a-20">내용</label>
          <input id="a-20" name="content" />
        </div>

        <div className="buttonGroup">
          <button type="submit">추가</button>
          <button type="reset">초기화</button>
        </div>


      </form>
  )
}
export default NoteForm