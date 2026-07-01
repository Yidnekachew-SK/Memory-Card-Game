function Cards({image, name, onClick = null}) {
	return (
		<div className="cards" onClick={onClick}>
			<img src={image}></img>
			<p>{name}</p>
		</div>
	)
}

export default Cards