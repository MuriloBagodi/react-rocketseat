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
            author="Murilo Bagodi"
            authorRole="Software Engineer"
            content="Fala galeraa 👋 
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    👉 jane.design/doctorcare
                    #novoprojeto #nlw #rocketseat"
            date="2024-07-11T11:30:30"
            title="Post"
          />
          <Post
            author="Murilo Bagodi"
            authorRole="Software Engineer"
            content="Fala galeraa 👋 
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    👉 jane.design/doctorcare
                    #novoprojeto #nlw #rocketseat"
            date="2024-07-21T11:30:30"
            title="Post"
          />
        </main>
      </div>
    </>
  )
}

export default App
