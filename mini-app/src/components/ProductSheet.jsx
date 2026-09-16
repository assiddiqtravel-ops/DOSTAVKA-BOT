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
        <img className="sheet-img" src={product.image} alt={product.name} />
        <div className="sheet-body">
          <div className="sheet-name">{product.name}</div>
          <div className="sheet-cat">{product.category}</div>

          <div className="section-title" style={{ margin: '18px 0 4px' }}>
            Tarkibi
          </div>
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
              Savatchaga qo'shish — {formatPrice(product.newPrice)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
