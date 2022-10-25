import React from 'react'
import Header from './Header'
import Lateral from './Lateral'
import Main from './Main'

function Layout() {
	return (
		<div className='App'>
			<Header />
			<div className='d-flex'>
				<Lateral />
				<Main />
			</div>
		</div>
	)
}

export default Layout
