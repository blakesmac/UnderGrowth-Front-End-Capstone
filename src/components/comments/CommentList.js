import React, { useContext, useEffect, useState} from "react"
import { CommentContext } from "./CommentProvider"
import { CommentDetail } from "./CommentDetail"
import { useHistory } from "react-router-dom"
import "./comment.css"

export const CommentList = () => {
    const {comments, getComments } = useContext(CommentContext)
    const history = useHistory()

    useEffect(() => {
        getComments()
    },[])

    return (
        <>
            <h1>Comments</h1>
            <section className="commentListButton">
                <button className="addComment" onClick={
                    () => history.push("/comments/create")
                }>Post Comment</button>
            </section>
            <div className="commentList">
                {
                    comments.map(c => {
                        return <CommentDetail key={c.id} comment={c} />
                    })
                }
            </div>
        
        
        </>
    )
}