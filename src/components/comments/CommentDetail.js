import React, {useContext, useEffect, useState} from "react"
import { CommentContext } from "./CommentProvider"
import { useParams, useHistory } from "react-router"
import { VscTrash, VscEdit,} from "react-icons/vsc";

export const CommentDetail = (props) => {
    const {comments, deleteComment, getComments } = useContext(CommentContext)
    const currentUser = sessionStorage.getItem("undergrowth_user")
    const [comment, setComment ] = useState(props.comment || {})
    const { commentId } = useParams();
    const history = useHistory()
    
    const handleDeletion = () => {
        deleteComment(comment.id)
        .then(() => {
            history.push("/comments")
        })
    }
    useEffect(() => {
        getComments()
    }, [])

    useEffect(() => {
        if (!props.comment) {
            const thisComment = comments.find(c => c.id === parseInt(commentId)) || {}
            setComment(thisComment)
        }
    }, [commentId, comments])

    return (
        <section className="comment">
            <h3 className="comment_title">{comment.title} </h3>
            <div className="comment_body">{comment.comment} </div>
            <div className="comment_date"> Date:{comment.date} </div>
            <button className="comment_delete" onClick={handleDeletion}> <VscTrash type={VscTrash}/> </button>
            <button className="comment_edit" onClick={() =>{
                history.push(`/comments/edit/${comment.id}`)
            }}> <VscEdit type={VscEdit}/> </button>
        </section>
    )
}