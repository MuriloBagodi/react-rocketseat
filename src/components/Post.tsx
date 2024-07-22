import styles from './Post.module.css'
import profilePic from '../assets/profile-pic.jpeg'
import { useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, parseISO } from 'date-fns'

declare interface PostInfo {
  author: string
  date: string
  title: string
  authorRole: string
  content: string
  avatar?: string
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
          <img className={styles.avatar} src={profilePic} alt="" />
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
    </article>
  )
}
