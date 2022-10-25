import React from 'react'
import Card from 'react-bootstrap/Card'

function Tarjeta({ title, text, img }) {
	return (
		<Card style={{ width: '18rem', height: '26rem', margin: '10px 5px' }}>
			<Card.Img variant='top' src={img} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{text}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Tarjeta
