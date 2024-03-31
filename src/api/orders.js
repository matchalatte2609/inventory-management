const orders = [
	{
		id: '1',
		date: '',
		products: [],
		categories: [],
		totalPrice: 1000,
		status: 'delivered',
	},
	{
		id: '2',
		date: '',
		products: [],
		categories: ['ring', 'bracelet'],
		totalPrice: 2000,
		status: 'pending',
	},
	{
		id: '3',
		date: '',
		products: [],
		categories: [],
		totalPrice: 3000,
		status: 'delivered',
	},
];

const ordersApi = {
	getAllOrders: () => {
		return orders;
	},
	getOrderById: (id) => {},
	addOrder: (id) => {},
	deleteOrder: (id) => {},
};

export default ordersApi;
