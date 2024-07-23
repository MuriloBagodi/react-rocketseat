import styles from './Post.module.css'
import { useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, parseISO } from 'date-fns'
import { Comment } from './Comment'

declare interface PostInfo {
  author: string
  date: string
  title: string
  authorRole: string
  content: string
  avatar?: string
  comments?: { comment: string }[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usePostTime = (postDate: any) => {
  const [timeAgo, setTimeAgo] = useState('')

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date()
      const postTime = parseISO(postDate)
      const hours = differenceInHours(now, postTime)

      if (hours < 24) {
        setTimeAgo(`${hours}h`)
      } else {
        const days = differenceInDays(now, postTime)
        setTimeAgo(`${days} dias`)
      }
    }

    calculateTimeAgo()

    // Optional: Update the time difference every hour
    const interval = setInterval(calculateTimeAgo, 3600000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [postDate])

  return timeAgo
}

export const Post = (props: PostInfo) => {
  const timeAgo = usePostTime(props.date)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.avatar} alt="" />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.authorRole}</span>
          </div>
        </div>

        <time dateTime={props.date}>Publicado há {timeAgo}</time>
      </header>

      <div className={styles.content}>
        <p>{props.content}</p>
      </div>

      <hr />
      <form className={styles.commentForm} action="">
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {props.comments?.map(({ comment }, index) => (
          <Comment key={index} comment={comment} avatar={props.avatar} />
        ))}
      </div>
    </article>
  )
}
