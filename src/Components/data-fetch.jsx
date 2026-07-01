async function FetchData (setData, setDefault) {
	let limit = 12;
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=30&limit=${limit}`);
		const data = await response.json();

		const pokemons = await Promise.all(
		   	data.results.map(async (pokemon) => {
		    	const res = await fetch(pokemon.url);
		    	const details = await res.json();

		    	return {
		    		name: details.name,
		    		image: details.sprites.other['official-artwork'].front_default,
		    		isClicked: false,
		    		id: crypto.randomUUID()
		    	};
		   	})
		);

		setData(pokemons.map(p => ({ ...p })));
		setDefault(pokemons.map(p => ({ ...p })));

	} catch (error) {
		console.log(error);
	}
}

export default FetchData