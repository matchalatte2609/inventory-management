import axios from 'axios';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:5002';

const materialsApi = {
	getAllProductsMaterials: () => {
		return axios
			.get(`${backendUrl}/materials`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.error(
					'There was an error fetching the products materials:',
					error
				);
			});
	},
	getProductMaterialsById: (id) => {
		return axios
			.get(`${backendUrl}/materials/${id}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				// Handle errors here, for example, by logging or displaying a message
				console.error(
					`Error fetching product material details for product id ${id}`,
					error
				);
			});
	},
};

export default materialsApi;
