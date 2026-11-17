import NoteApp from "./NoteApp/App";
// import ProductPage from "./pagers/products/ProductPage";
// import UserPage from "./pagers/users/UserPage";


function Playground() {
  return (
    <div style={styles}>
      {/* <UserPage /> */}
      {/* <ProductPage /> */}
      <NoteApp />
    </div>
  );
}


export default Playground;


const styles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};