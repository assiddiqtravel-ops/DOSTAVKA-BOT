import { useEffect, useState } from 'react';
import { getMyOrders } from '../api.js';
import { getUser } from '../telegram.js';
import { formatPrice } from '../utils.js';

export default function Profile({ onReorder }) {
  const user = getUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyOrders()
      .then((data) => setOrders(Array.isArray(data) ? data : []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, []);

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <div className="page">
      <div className="profile-head">
        <div className="profile-avatar">👤</div>
        <div className="username">{user.first_name}</div>
        {user.username && (
          <div className="hello">@{user.username}</div>
        )}
      </div>

      <div className="section-title" style={{ marginTop: 0 }}>
        📜 Mening buyurtmalarim
      </div>

      {loading ? (
        <div className="loader">Yuklanmoqda...</div>
      ) : orders.length === 0 ? (
        <div className="empty">
          <div className="empty-emoji">📭</div>
          Hozircha buyurtmalar yo'q
        </div>
      ) : (
        orders.map((o) => {
          const items = Array.isArray(o.items) ? o.items : [];
          return (
            <div className="order-card" key={o.id}>
              <div className="order-top">
                <b>#{o.id}</b>
                <span
                  className={`badge ${
                    o.status === 'yetkazildi' ? 'done' : 'pending'
                  }`}
                >
                  {o.status}
                </span>
              </div>
              <div className="order-items">
                {items.map((i) => `${i.name} x${i.qty}`).join(', ')}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-light)', fontSize: 12 }}>
                  {fmtDate(o.createdAt)}
                </span>
                <b className="price-new">{formatPrice(o.total)}</b>
              </div>
              <button
                className="btn btn-ghost"
                style={{ marginTop: 12, padding: 10, fontSize: 14 }}
                onClick={() => onReorder(items)}
              >
                🔁 Yana shundan buyurtma qilish
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
