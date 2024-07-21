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
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
