const products = [
	{
		name: 'Ring 1',
		price: 3000,
		imageUrl: 'https://www.tierra.vn/files/800x/nch1003_1-1--IlKUfJUpkW.webp',
	},
	{
		name: 'Ring 2',
		price: 2110,
		imageUrl: 'https://www.tierra.vn/files/800x/nch1003_1-1--IlKUfJUpkW.webp',
	},
	{
		name: 'Ring 3',
		price: 3000,
		imageUrl: 'https://www.tierra.vn/files/800x/nch1003_1-1--IlKUfJUpkW.webp',
	},
	{
		name: 'Ring 4',
		price: 3000,
		imageUrl: 'https://www.tierra.vn/files/800x/nch1003_1-1--IlKUfJUpkW.webp',
	},
];
const productsApi = {
	getAllProducts: () => {
		return products;
	},
	getProductById: (id) => {
		return products.filter((product) => product.id === id)[0];
	},
	addProduct: ({ name, id, price }) => {
		products.push({ name, id, price });
		return { name, id };
	},
	deleteProduct: (id) => {
		return id;
	},

	editProduct: ({ id, name }) => {
		return { id, name };
	},
};

export default productsApi;
