// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentObj, isLikedBtn, onDeleteBtn} = props
  const {name, userText, id, isLiked, backgroundColor, date} = commentObj

  const onLiked = () => {
    isLikedBtn(id)
  }

  const onDelete = () => {
    onDeleteBtn(id)
  }

  const islikedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeColors = isLiked ? 'likedColor' : 'unlikeColor'

  return (
    <li className="list-item">
      <div className="row-styling">
        <p className={`initial ${backgroundColor}`}>{name[0]}</p>
        <p className="title">{name}</p>
        <p className="date-display">{formatDistanceToNow(date)} ago</p>
      </div>
      <p className="comment-display">{userText}</p>
      <div className="styling">
        <button className="button" type="button" onClick={onLiked}>
          <div className="row-styling">
            <img className="like-image" src={islikedImage} alt="like" />
            <p className={`title  ${likeColors}`}>Like</p>
          </div>
        </button>
        <button
          testid="delete"
          className="button"
          type="button"
          onClick={onDelete}
        >
          <img
            className="like-image"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
