import './App.css'
import PostList from './componets/post-list/PostList'
import MainHeader from './componets/main-header/MainHeader'
import { useState } from 'react'
function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler(event) {
    setModalIsVisible(true);
  }
  function closeModalHandler(event) {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <PostList 
        onCloseModalFunc={closeModalHandler}
        modalIsVisibleProp={modalIsVisible}></PostList>
      </main>
    </>
  )
}

export default App
