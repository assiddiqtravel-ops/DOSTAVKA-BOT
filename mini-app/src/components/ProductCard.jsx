import { formatPrice } from '../utils.js';

export default function ProductCard({ product, onOpen, onAdd }) {
  return (
    <div className="card" onClick={() => onOpen(product)}>
      <img className="card-img" src={product.image} alt={product.name} />
      <button
        className="add-btn"
        onClick={(e) => {
          e.stopPropagation();
          onAdd(product);
        }}
      >
        +
      </button>
      <div className="card-body">
        <div className="card-name">{product.name}</div>
        <div className="price-row">
          <span className="price-new">{formatPrice(product.newPrice)}</span>
          {product.oldPrice ? (
            <span className="price-old">{formatPrice(product.oldPrice)}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
