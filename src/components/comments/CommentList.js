import React, { useContext, useEffect, useState} from "react"
import { CommentContext } from "./CommentProvider"
import { CommentDetail } from "./CommentDetail"
import { useHistory } from "react-router-dom"
import "./comment.css"
import { Button } from "react-bootstrap"

export const CommentList = () => {
    const {comments, getComments } = useContext(CommentContext)
    const history = useHistory()

    useEffect(() => {
        getComments()
    },[])

    return (
        <>
            <h1 className="commentTitle">Comments</h1>
            <section className="commentListButton">
                <Button size="large" variant="dark" className="addComment" onClick={
                    () => history.push("/comments/create")
                }>Post Comment</Button>
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