import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

declare interface CommentInfo {
  comment: string
  avatar?: string
}

export const Comment = (props: CommentInfo) => {
  return (
    <div className={styles.comment}>
      <Avatar src={props.avatar ?? 'https://github.com/murilobagodi'} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Murilo Bagodi</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Postagem">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.comment}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
