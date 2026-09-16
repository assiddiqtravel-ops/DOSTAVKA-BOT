import { formatPrice, discountPct } from '../utils.js';
import Icon from './Icon.jsx';

export default function ProductCard({ product, onOpen, onAdd }) {
  const off = discountPct(product.oldPrice, product.newPrice);

  return (
    <div className="card" onClick={() => onOpen(product)}>
      <div className="card-imgwrap">
        <img
          className="card-img"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        {off > 0 && <div className="badge-off">−{off}%</div>}
        <button
          className="add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product);
          }}
          aria-label="Savatchaga qo'shish"
        >
          <Icon name="plus" size={22} strokeWidth={2.5} />
        </button>
      </div>
      <div className="card-body">
        <div className="card-name">{product.name}</div>
        <div className="card-desc">{product.description}</div>
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
