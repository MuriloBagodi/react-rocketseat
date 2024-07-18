import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <h1>App</h1>
      <Post
        title="Teta"
        author="Murilo Bagodi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum dignissimos dicta neque est dolor at adipisci non a aspernatur reiciendis, reprehenderit sed odio vitae. Odit temporibus quisquam blanditiis perspiciatis!"
      ></Post>
    </>
  )
}

export default App
