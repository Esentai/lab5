import type { Metadata } from 'next';
import AdminPanel from '@/components/AdminPanel';

export const metadata: Metadata = {
  title: 'Администратор — FES 2026',
  description: 'Проверка заявок на участие в FES 2026.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main id="main" tabIndex={-1} className="section">
      <div className="container">
        <h1>Панель администратора</h1>
        <AdminPanel />
      </div>
    </main>
  );
}
