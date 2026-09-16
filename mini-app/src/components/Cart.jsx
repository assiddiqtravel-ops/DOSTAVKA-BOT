import { useState } from 'react';
import { formatPrice } from '../utils.js';

const COLA = { id: 'cola', name: 'Coca-Cola 0.5L', price: 5000 };

export default function Cart({ cart, changeQty, onConfirm, goCatalog }) {
  const [cola, setCola] = useState(false);
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [geo, setGeo] = useState(null);
  const [geoStatus, setGeoStatus] = useState('idle');
  const [sending, setSending] = useState(false);

  const itemsTotal = cart.reduce((s, i) => s + i.newPrice * i.qty, 0);
  const total = itemsTotal + (cola ? COLA.price : 0);

  const sendLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus('error');
      return;
    }
    setGeoStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        setGeo({ lat, lng, url: `https://maps.google.com/?q=${lat},${lng}` });
        setGeoStatus('ok');
      },
      () => setGeoStatus('error'),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="topbar">
          <div className="loc-val" style={{ fontSize: 22, fontWeight: 800 }}>
            Savatcha
          </div>
        </div>
        <div className="empty">
          <div className="empty-emoji">🛒</div>
          Savatchangiz bo'sh
          <div style={{ marginTop: 20, padding: '0 24px' }}>
            <button className="btn" onClick={goCatalog}>
              Menyuga o'tish
            </button>
          </div>
        </div>
      </div>
    );
  }

  const confirm = async () => {
    if (!phone.trim()) {
      alert('Iltimos, telefon raqamingizni kiriting');
      return;
    }
    if (!geo && !address.trim()) {
      alert('Iltimos, joylashuvingizni yuboring yoki manzilni kiriting');
      return;
    }
    setSending(true);

    const items = cart.map((i) => ({
      id: i.id,
      name: i.name,
      price: i.newPrice,
      qty: i.qty,
    }));
    if (cola)
      items.push({ id: COLA.id, name: COLA.name, price: COLA.price, qty: 1 });

    const location = [address.trim(), geo ? geo.url : '']
      .filter(Boolean)
      .join(' | ');

    await onConfirm({ items, total, phone, location });
  };

  return (
    <div className="page">
      <div className="topbar">
        <div className="loc-val" style={{ fontSize: 22, fontWeight: 800 }}>
          Savatcha
        </div>
      </div>

      <div className="pad" style={{ paddingTop: 16 }}>
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <div className="nm">{item.name}</div>
              <div className="price-new">{formatPrice(item.newPrice)}</div>
            </div>
            <div className="qty">
              <button onClick={() => changeQty(item.id, -1)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => changeQty(item.id, +1)}>+</button>
            </div>
          </div>
        ))}

        {/* Upsell */}
        <div className="upsell">
          <div style={{ fontSize: 30 }}>🥤</div>
          <div className="upsell-text">
            Bunga qo'shimcha <b>Coca-Cola</b> ni atigi <b>5 000 so'm</b>ga
            qo'shasizmi?
          </div>
          <div
            className={`switch ${cola ? 'on' : ''}`}
            onClick={() => setCola(!cola)}
          />
        </div>

        {/* Joylashuv */}
        <div className="sec-label">📍 Yetkazib berish manzili</div>
        <button
          className={`geo-btn ${geoStatus === 'ok' ? 'ok' : ''}`}
          onClick={sendLocation}
          disabled={geoStatus === 'loading'}
        >
          {geoStatus === 'loading' && '⏳ Aniqlanmoqda...'}
          {geoStatus === 'ok' && "✅ Joylashuv yuborildi (o'zgartirish)"}
          {geoStatus === 'idle' && '📍 Joylashuvni yuborish'}
          {geoStatus === 'error' && '⚠️ Qayta urinish (ruxsat bering)'}
        </button>
        {geo && (
          <a className="geo-link" href={geo.url} target="_blank" rel="noreferrer">
            🗺 Yuborilgan joyni xaritada ko'rish
          </a>
        )}
        {geoStatus === 'error' && (
          <div className="geo-hint">
            Joylashuvni aniqlab bo'lmadi. Lokatsiyaga ruxsat bering yoki manzilni
            qo'lda yozing.
          </div>
        )}

        <input
          className="input"
          style={{ marginTop: 14 }}
          placeholder="📞 Telefon raqamingiz"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="input"
          placeholder="🏠 Manzil (uy, kvartira, mo'ljal)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="total-row">
          <span>Jami to'lov:</span>
          <span className="big">{formatPrice(total)}</span>
        </div>

        <button className="btn" onClick={confirm} disabled={sending}>
          {sending ? 'Yuborilmoqda...' : 'Buyurtmani tasdiqlash'}
        </button>
      </div>
    </div>
  );
}
