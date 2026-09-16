import { formatPrice, discountPct } from '../utils.js';
import Icon from './Icon.jsx';

export default function ProductCard({ product, onOpen, onAdd, onChangeQty, qty = 0 }) {
  const off = discountPct(product.oldPrice, product.newPrice);

  const stop = (e) => e.stopPropagation();

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

        {qty > 0 ? (
          <div className="qty-stepper" onClick={stop}>
            <button
              className="qty-btn"
              onClick={() => onChangeQty(product.id, -1)}
              aria-label="Kamaytirish"
            >
              <Icon name="minus" size={18} strokeWidth={2.6} />
            </button>
            <span className="qty-count">{qty}</span>
            <button
              className="qty-btn"
              onClick={() => onAdd(product)}
              aria-label="Ko'paytirish"
            >
              <Icon name="plus" size={18} strokeWidth={2.6} />
            </button>
          </div>
        ) : (
          <button
            className="add-btn"
            onClick={(e) => {
              stop(e);
              onAdd(product);
            }}
            aria-label="Savatchaga qo'shish"
          >
            <Icon name="plus" size={22} strokeWidth={2.5} />
          </button>
        )}
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
