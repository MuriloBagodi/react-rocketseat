import styles from './Post.module.css'

import profilePic from '../assets/profile-pic.jpeg'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={profilePic} alt="" />
          <div className={styles.authorInfo}>
            <strong>Nome</strong>
            <span>Cargo</span>
          </div>
        </div>

        <time dateTime="2024-07-21 15:23:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  )
}
