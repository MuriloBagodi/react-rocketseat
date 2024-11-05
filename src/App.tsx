import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import posts from './db/POSTS.json'

import styles from './app.module.css'
import { SideBar } from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar name="Murilo Bagodi" role="Software Engineer" />
        <main>
          {posts.map((post, index) => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={index}
            ></Post>
          ))}
        </main>
      </div>
    </>
  )
}

export default App
