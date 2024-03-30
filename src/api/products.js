const products = [];

const getAllProducts = async () => {
	return [
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
};

const getProductById = async (id) => {
	return {
		id,
		name: 'Ring',
		price: 300000,
	};
};

const addProduct = async ({ name, id, price }) => {
	return { name, id };
};

const deleteProduct = async (id) => {
	return id;
};

const editProduct = async ({ id, name }) => {
	return { id, name };
};

export default {
	getAllProducts,
	getProductById,
	addProduct,
	deleteProduct,
	editProduct,
};
