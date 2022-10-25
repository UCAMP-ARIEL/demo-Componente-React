import React from 'react'
import Tarjeta from './Tarjeta'

function Main() {
	const cards = [
		{ titulo: 'card1', text: 'dfjkslndlkfcm', img: 'https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png' },
		{
			titulo: 'card2',
			text: 'fdfdfdm',
			img: 'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg',
		},
		{
			titulo: 'card3',
			text: 'slkfcm',
			img: 'https://previews.123rf.com/images/yupiramos/yupiramos1703/yupiramos170306711/73892568-joven-empresario-avatar-personaje-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg',
		},
	]

	return (
		<div className='contenedor'>
			{cards.map((card, index) => {
				return <Tarjeta key={index} title={card.titulo} text={card.text} img={card.img} />
			})}
		</div>
	)
}

export default Main
