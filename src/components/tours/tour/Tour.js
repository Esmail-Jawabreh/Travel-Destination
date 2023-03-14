import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Tour.css'

function Tour(props) {
    return (
        <Link to={`/city/${props.tour.id}`}>


            <Col>
                <Card class='card'>
                    <Card.Img variant="top" src={props.tour.image} alt={props.tour.name} className='img' />
                    <Card.Body>
                        <Card.Title class='name'>{props.tour.name}</Card.Title>

                    </Card.Body>
                </Card>
            </Col>
        </Link >
    )
}
export default Tour;