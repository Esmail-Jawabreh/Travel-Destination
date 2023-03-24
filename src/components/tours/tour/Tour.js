import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Tour.css'


function Tour(props) {
    return (
        <Link to={`/city/${props.tour.id}`} className='link'>

            <Col>
                <Card className='card'>
                    <Card.Img variant="top" src={props.tour.image} alt={props.tour.name} />
                    <Card.Body className='body'>
                        <Card.Title className='name'>{props.tour.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>

        </Link >
    )
}


export default Tour;