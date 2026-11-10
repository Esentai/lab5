'use client';

import { useEffect, useState } from 'react';
import { formatLabels, getParticipants } from '@/lib/participants';
import type { Participant } from '@/lib/participants';

export default function ParticipantsList() {
  const [participants, setParticipants] = useState<Participant[] | null>(null);

  useEffect(() => {
    setParticipants(getParticipants().filter((participant) => participant.status === 'approved'));
  }, []);

  if (participants === null) {
    return <p>Загрузка...</p>;
  }

  if (participants.length === 0) {
    return <p>Пока нет подтверждённых участников.</p>;
  }

  return (
    <div className="table-scroll" role="region" aria-labelledby="participants-caption" tabIndex={0}>
      <table className="schedule">
        <caption id="participants-caption">Подтверждённые участники</caption>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Компания или вуз</th>
            <th scope="col">Кто</th>
            <th scope="col">Формат</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant) => (
            <tr key={participant.id}>
              <th scope="row">{participant.name}</th>
              <td>{participant.organization || '—'}</td>
              <td>{participant.role}</td>
              <td>{formatLabels[participant.format]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
