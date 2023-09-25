const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: {},
			characters: {},
			vehicles: {},
			data: {},
			favorites: [],
		},
		actions: {
			
			getCategories: async () => {
				const response = await fetch("https://www.swapi.tech/api")
				const complete_response = await response.json();
				const categories = complete_response.results
				setStore({...getStore(), categories });
				console.log(categories)
			},

			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets");
				const planets = await response.json();
				setStore({ planets: planets.results });
				console.log(planets.results)
			},
			
			getCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people");
				const characters = await response.json();
				setStore({ characters: characters.results });
				console.log(characters.results)
			},

			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				const vehicles = await response.json();
				setStore({ vehicles: vehicles.results });
				console.log(vehicles.results)
			},

			getInfoDetail: async (description, id) => {
				const response = await fetch(`https://www.swapi.tech/api/${description}/${id}`);
				const data = await response.json();
				setStore({data:data.result.properties});
				console.log(data.result.properties)
			},

			setFavorite: (name, description, id) => {
				const store = getStore();
				store.favorites.push({
					name: name,
					description: description,
					id: id,
				});
				setStore(store);
			},

			deleteFavorite: (name) => {
				const store = getStore();
				store.favorites = store.favorites.filter((favorite) => favorite.name != name);
				setStore(store);
			},
		}
	};
};

export default getState;
