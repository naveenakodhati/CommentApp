import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    userText: '',
  }

  onChangeTextName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({userText: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, userText} = this.state
    const randomColor = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const color = initialContainerBackgroundClassNames[randomColor - 1]

    const newComment = {
      name,
      userText,
      id: v4(),
      isLiked: false,
      date: new Date(),
      backgroundColor: color,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      userText: '',
    }))
  }

  isLikedBtn = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachList => {
        if (eachList.id === id) {
          return {...eachList, isLiked: !eachList.isLiked}
        }
        return eachList
      }),
    }))
  }

  onDeleteBtn = id => {
    const {commentsList} = this.state
    const filterComments = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState({commentsList: filterComments})
  }

  render() {
    const {commentsList, name, userText} = this.state

    return (
      <div className="main-bg-container">
        <div className="display-container">
          <div>
            <h1 className="main-heading">Comments</h1>
            <img
              className="comment-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
            <p className="about">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                placeholder="Your Name"
                type="text"
                value={name}
                className="input-name"
                onChange={this.onChangeTextName}
              />
              <textarea
                placeholder="Your Comment"
                cols="40"
                rows="10"
                className="input-name"
                value={userText}
                onChange={this.onChangeComment}
              >
                {userText}
              </textarea>
              <br />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="comment-image-1"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <hr className="line" />
        <p className="comments-count">
          <span className="comments-length">{commentsList.length} </span>
          Comments
        </p>

        <ul className="ul-container">
          {commentsList.map(eachComment => (
            <CommentItem
              onDeleteBtn={this.onDeleteBtn}
              isLikedBtn={this.isLikedBtn}
              key={eachComment.id}
              commentObj={eachComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
