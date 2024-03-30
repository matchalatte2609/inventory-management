const getAllProducts = async () => {
	return [
		{
			name: 'Ring',
			id: 1,
		},
		{ name: 'Bracelet', id: 2 },
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
		{},
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
