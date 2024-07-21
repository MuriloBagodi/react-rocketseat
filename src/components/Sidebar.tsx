import styles from './Sidebar.module.css'
import bannerImg from '../assets/banner-profile.jpg'
import profilePic from '../assets/profile-pic.jpeg'
import { PencilLine } from '@phosphor-icons/react'

declare interface ProfileInfo {
  name: string
  role: string
  bannerUrl?: string
  profilePicUrl?: string
}

export const SideBar = (props: ProfileInfo) => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.banner}
        src={props.bannerUrl ?? bannerImg}
        alt=""
      />
      <div className={styles.profile}>
        <div className={styles.profilePicDiv}>
          <img
            className={styles.profilePic}
            src={props.profilePicUrl ?? profilePic}
            alt=""
          />
        </div>
        <strong>{props.name}</strong>
        <span>{props.role}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}
