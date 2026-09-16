import { useEffect, useState } from 'react';
import { getOrders, setOrderStatus } from '../api.js';
import { formatPrice, formatDate } from '../utils.js';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getOrders()
      .then((data) => setOrders(Array.isArray(data) ? data : []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
    // Har 15 soniyada avtomatik yangilash
    const t = setInterval(load, 15000);
    return () => clearInterval(t);
  }, []);

  const toggleStatus = async (o) => {
    const next = o.status === 'yetkazildi' ? 'kutilmoqda' : 'yetkazildi';
    await setOrderStatus(o.id, next);
    load();
  };

  // Manzil + GPS xarita havolasini ko'rsatish
  const renderLocation = (loc) => {
    if (!loc) return '—';
    const urlMatch = loc.match(/https?:\/\/\S+/);
    const text = loc
      .replace(/https?:\/\/\S+/, '')
      .replace(/\|/g, '')
      .trim();
    return (
      <>
        {text && <div>{text}</div>}
        {urlMatch && (
          <a
            className="map-link"
            href={urlMatch[0]}
            target="_blank"
            rel="noreferrer"
          >
            📍 Xaritada ochish
          </a>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="toolbar">
        <div>
          <div className="page-title">Buyurtmalar</div>
          <div className="page-sub">Jami: {orders.length} ta buyurtma</div>
        </div>
        <button className="btn btn-light refresh" onClick={load}>
          🔄 Yangilash
        </button>
      </div>

      <div className="card">
        {loading ? (
          <div className="loader">Yuklanmoqda...</div>
        ) : orders.length === 0 ? (
          <div className="empty">📭 Hozircha buyurtmalar yo'q</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Mijoz</th>
                <th>Telefon</th>
                <th>Buyurtma</th>
                <th>Manzil</th>
                <th>Jami</th>
                <th>Sana</th>
                <th>Holati</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => {
                const items = Array.isArray(o.items) ? o.items : [];
                return (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.user?.name || '—'}</td>
                    <td>{o.phone || o.user?.phone || '—'}</td>
                    <td>
                      {items.map((i) => `${i.name} x${i.qty}`).join(', ')}
                    </td>
                    <td>{renderLocation(o.location)}</td>
                    <td className="price-new">{formatPrice(o.total)}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                      {formatDate(o.createdAt)}
                    </td>
                    <td>
                      <span
                        className={`badge ${
                          o.status === 'yetkazildi' ? 'done' : 'pending'
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className={`btn-sm ${
                          o.status === 'yetkazildi' ? 'btn-light' : 'btn-green'
                        }`}
                        onClick={() => toggleStatus(o)}
                      >
                        {o.status === 'yetkazildi'
                          ? '↩ Qaytarish'
                          : '✓ Yetkazildi'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
