import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'

import styles from './app.module.css'
import { SideBar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar name="Murilo Bagodi" role="Software Engineer" />
        <main>
          <Post
            title="Teta"
            author="Murilo Bagodi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum dignissimos dicta neque est dolor at adipisci non a aspernatur reiciendis, reprehenderit sed odio vitae. Odit temporibus quisquam blanditiis perspiciatis!"
          ></Post>
        </main>
      </div>
    </>
  )
}

export default App
