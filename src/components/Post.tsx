import styles from './Post.module.css'
import { FormEvent, useEffect, useState } from 'react'
import { differenceInDays, differenceInHours, parseISO } from 'date-fns'
import { Comment } from './Comment'

declare interface PostInfo {
  author: { avatarUrl: string; name: string; role: string }
  publishedAt: string
  content: { type: string; content: string }[]
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
  const [comment, setComment] = useState([''])
  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentChange(event: { target: { value: string } }) {
    const newText = event.target.value
    setNewCommentText(newText)
  }

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    comment.push(newCommentText)
    setComment(comment)
    setNewCommentText('')
  }
  const timeAgo = usePostTime(props.publishedAt)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time dateTime={props.publishedAt}>Publicado há {timeAgo}</time>
      </header>

      <div className={styles.content}>
        {props.content.map((content, index) => {
          if (content.type === 'paragraph') {
            return <p key={index}>{content.content}</p>
          } else {
            return (
              <a key={index} href={content.content}>
                {content.content}
              </a>
            )
          }
        })}
      </div>

      <hr />
      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
        action=""
      >
        <strong>Deixe seu feedback</strong>
        <textarea
          name="commentTextArea"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe seu comentário"
        ></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comment.map((comment, index) => {
          return (
            <Comment
              key={index}
              comment={comment}
              avatar="https://github.com/murilobagodi.png"
            />
          )
        })}
      </div>
    </article>
  )
}
