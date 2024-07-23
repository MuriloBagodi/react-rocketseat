import styles from './Avatar.module.css'

declare interface Avatar {
  src: string
}

export const Avatar = (props: Avatar) => {
  return <img className={styles.avatarImg} src={props.src} alt="" />
}
