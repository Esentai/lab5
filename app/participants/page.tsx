import type { Metadata } from 'next';
import ParticipantsList from '@/components/ParticipantsList';
import { sharedOpenGraph } from '@/lib/seo';

const title = 'Участники — FES 2026';
const description = 'Список подтверждённых участников Frontend Engineering Summit 2026.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/participants' },
  openGraph: { ...sharedOpenGraph, title, description },
  twitter: { card: 'summary', title, description },
};

export default function ParticipantsPage() {
  return (
    <main id="main" tabIndex={-1} className="section">
      <div className="container">
        <h1>Участники</h1>
        <p className="section__lead">Если вы нашли себя в этом списке, значит всё в порядке.</p>
        <ParticipantsList />
      </div>
    </main>
  );
}
