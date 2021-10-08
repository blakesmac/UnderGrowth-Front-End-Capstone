import React, { useContext, useEffect, useState} from "react"
import { CommentContext} from "./CommentProvider"
import { useHistory, useParams } from "react-router-dom"
import "./comment.css"
import { PlantContext } from "../plants/PlantProvider"

export const CommentForm = () => {
    const {addComment, getCommentById, editComment} = useContext(CommentContext)
    const userId = sessionStorage.getItem("undergrowth_user")
    const [comment, setComment] = useState({
        plantId: 0,
        userId: 0,
        title: "",
        comment: "",
        date: ""
    })
    const {getPlants, plants} = useContext(PlantContext)

    const [isLoading, setIsLoading] = useState(true);
    const { commentId } = useParams();
    const history = useHistory();

    const handleInputChange = (event) => {
        const newComment = {...comment}
        newComment[event.target.id] = event.target.value
        setComment(newComment)
    }


    const handleSaveComment = () => {
        const timestamp = new Date().toLocaleDateString()
        setIsLoading(true)
        if(commentId){
            editComment({
                userId: parseInt(userId),
                plantId: parseInt(comment.plantId),
                id: parseInt(commentId),
                title: comment.title,
                comment: comment.comment,
                date: comment.date 
            })
            .then(() => history.push(`/comments/detail/${commentId}`))
        } else {
            addComment({
                userId: parseInt(userId),
                plantId: parseInt(comment.plantId),
                title: comment.title,
                comment: comment.comment,
                date: timestamp
            })
            .then(() => history.push("/comments") )
        }
    }

    useEffect(() => {
        if(commentId){
            getCommentById(commentId)
        .then(comment => {
            setComment(comment)

            setIsLoading(false)
        })
        } else {
            setIsLoading(false)
        }
    }, []) 

    useEffect(() => {
        getPlants()
    },[])

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">Add a Comment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlfor="title">Comment Title:</label>
                    <input type="text" id="title" name="title" required autoFocus className="form-control"
                    placeholder="Enter Comment Title!" onChange={handleInputChange} default={comment.title}/>
                </div>
            </fieldset>
                <div className="form-group">
                    <label htmlfor="comment">Comment Body:</label>
                    <input type="text" id="comment" name="comment" required autoFocus className="form-control"
                    placeholder="Enter your Comment" onChange={handleInputChange} default={comment.comment}/>
                    </div>
                    <fieldset>
                    <div>
                        <label htmlFor="plantId">For Plant: </label> <br />
                        <select id="plantId" onChange={handleInputChange} defaultValue={comment.plantId}>
                            {plants.map(plant => (
                                <option
                                    key={plant.id}
                                    value={plant.id}
                                >
                                    {plant.name}
                                </option>
                            ))}
                        </select>
                    </div>
            </fieldset>
            <button className="saveComment"
            disabled={isLoading} onClick={event => {
                event.preventDefault()
                handleSaveComment()
            }}> Post Comment </button>
        </form>
    )
}