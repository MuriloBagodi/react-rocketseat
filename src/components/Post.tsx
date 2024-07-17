interface PostSettings {
  title: string
  content: string
  author: string
}

export const Post = (prop: PostSettings) => {
  return (
    <>
      <div className="postCard">
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
        <p>{prop.author}</p>
      </div>
    </>
  )
}
