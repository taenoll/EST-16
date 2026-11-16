



// 타입 지정하고 이벤트 연결하기




function UserSearchBox() {
  return (
    <form className="UserSearchBox">
        <div className="control">
          <label htmlFor="a-20">사용자 검색</label>
          <input type="search" id='a-20' placeholder='사용자 정보 입력' />
        </div>
        <button type="submit">찾기</button>
        <button type="reset">목록 초기화</button>
      </form>
  )
}
export default UserSearchBox