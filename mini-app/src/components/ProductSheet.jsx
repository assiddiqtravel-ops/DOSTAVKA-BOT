import { formatPrice } from '../utils.js';

export default function ProductSheet({ product, onClose, onAdd }) {
  if (!product) return null;

  const ingredients = (product.description || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-close" onClick={onClose}>
          ✕
        </div>
        <img className="sheet-img" src={product.image} alt={product.name} />
        <div className="sheet-body">
          <div className="sheet-name">{product.name}</div>
          <span className="sheet-cat">{product.category}</span>

          <div className="sheet-sub">Tarkibi</div>
          <ul className="ingredients">
            {ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <div className="sticky-cta">
            <button
              className="btn"
              onClick={() => {
                onAdd(product);
                onClose();
              }}
            >
              Savatchaga qo'shish · {formatPrice(product.newPrice)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
