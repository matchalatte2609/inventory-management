import './ProductsTopbar.css';
const Topbar = ({ onSearch, onAddProduct }) => (
	<div className="header">
		<input
			type="text"
			placeholder="Search Products..."
			className="search-bar"
			onChange={onSearch}
		/>
		<button className="topbar-button" onClick={onAddProduct}>
			New Product
		</button>
	</div>
);

export default Topbar;
