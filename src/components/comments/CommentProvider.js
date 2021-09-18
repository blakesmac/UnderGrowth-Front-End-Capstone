import React, { useState, createContext} from "react"

export const CommentContext = createContext()
const URL = "http://localhost:8088"

export const CommentProvider = (props) => {
    const [comments, setComments ] = useState([])
    
    const getComments = () => {
        return fetch(`${URL}/comments?_expand=userId&_expand=plantId`)
        .then(r => r.json())
        .then(setComments)
    }

    const getCommentById = (commentId) => {
        return fetch(`${URL}/comments/${commentId}`)
        .then(r => r.json())
    }

    const addComment = commentObj => {
        return fetch(`${URL}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        })
        .then(getComments)
    }

    const editComment = comment => {
        return fetch(`${URL}/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(getComments)
    }

    const deleteComment = commentId => {
        return fetch(`${URL}/comments/${commentId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(getComments)
    }

    return (
        <CommentContext.Provider value={{
            comments, setComments, getComments, getCommentById, editComment, deleteComment, addComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}