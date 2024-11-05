import styles from './Sidebar.module.css'
import bannerImg from '../assets/banner-profile.jpg'

import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

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
          <Avatar src="https://github.com/murilobagodi.png" />
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
