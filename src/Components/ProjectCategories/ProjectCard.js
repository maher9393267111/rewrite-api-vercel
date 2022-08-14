import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from 'react-icons/fa';

const ProjectCard = (props) => {

    const [click, setClick] = useState(false);
    const [thumbsUp, setThumbsUp] = useState(props.thumbsUp)
    const [thumbsDown, setThumbsDown] = useState(props.thumbsDown)
    const [hasVoted, setHasVoted] = useState(false)

    const handleClick = () => setClick(!click);

    async function handleUpVote() {
        if (!hasVoted) {
            setHasVoted(true)
            setThumbsUp(thumbsUp + 1)
            await fetch("api/add-upvote", {
                headers: { "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ title: props.title }),
            });
        } else {
            window.alert("You can only vote once per project!")
        }
    }

    async function handleDownVote() {
        if (!hasVoted) {
            setThumbsDown(thumbsDown + 1)
            await fetch("api/add-downvote", {
                headers: { "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({ title: props.title }),
            });
        } else {
            window.alert("You can only vote once per project!")
        }

    }

    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img style={{ height: '10rem' }} variant='top' src={require(`./images/${props.category}.jpg`)} />
            <Card.Body>
                <Card.Title> {props.title} </Card.Title>
                <Card.Text>
                    <span className="small-title">Project Description: </span>{props.description}
                </Card.Text>
                <Card.Text>
                    <span className="small-title">Project Category: </span>{props.category}
                </Card.Text>
                <div onClick={handleClick}>
                    <Button style={{ margin: '5px' }} onClick={() => handleUpVote()}><FaRegThumbsUp />{`${thumbsUp}`} </Button>
                    <Button style={{ margin: '5px' }} onClick={() => handleDownVote()}><FaRegThumbsDown />{`${thumbsDown}`} </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard