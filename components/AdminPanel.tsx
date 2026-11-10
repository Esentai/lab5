'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { trackChoices } from '@/data/conference';
import { formatLabels, getParticipants, updateParticipantStatus } from '@/lib/participants';
import type { Participant, ParticipantStatus } from '@/lib/participants';

const ADMIN_KEY = 'fes-admin';

const statusLabels: Record<ParticipantStatus, string> = {
  pending: 'Ожидает',
  approved: 'Подтверждён',
  rejected: 'Отклонён',
};

function trackLabels(values: string[]): string {
  const labels = trackChoices.filter((track) => values.includes(track.value)).map((track) => track.label);
  return labels.join(', ') || '—';
}

export default function AdminPanel() {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem(ADMIN_KEY) === 'true');
    setParticipants(getParticipants());
    setIsReady(true);
  }, []);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('login') === 'admin' && data.get('password') === 'admin') {
      sessionStorage.setItem(ADMIN_KEY, 'true');
      setLoginError('');
      setParticipants(getParticipants());
      setIsLoggedIn(true);
    } else {
      setLoginError('Неверный логин или пароль.');
    }
  }

  function handleLogout() {
    sessionStorage.removeItem(ADMIN_KEY);
    setIsLoggedIn(false);
  }

  function changeStatus(id: string, status: ParticipantStatus) {
    setParticipants(updateParticipantStatus(id, status));
  }

  if (!isReady) {
    return <p>Загрузка...</p>;
  }

  if (!isLoggedIn) {
    return (
      <form className="form form--login" onSubmit={handleLogin}>
        <div className="field">
          <label htmlFor="login">Логин</label>
          <input id="login" name="login" type="text" autoComplete="username" required />
        </div>

        <div className="field">
          <label htmlFor="password">Пароль</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required />
        </div>

        <p className="field__error" role="alert">{loginError}</p>

        <button className="btn" type="submit">Войти</button>
      </form>
    );
  }

  return (
    <>
      <p>
        <button className="btn btn--secondary" type="button" onClick={handleLogout}>Выйти</button>
      </p>

      {participants.length === 0 ? (
        <p>Заявок пока нет.</p>
      ) : (
        <div className="table-scroll" role="region" aria-labelledby="admin-caption" tabIndex={0}>
          <table className="schedule schedule--wide">
            <caption id="admin-caption">Заявки на участие</caption>
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Почта</th>
                <th scope="col">Компания или вуз</th>
                <th scope="col">Кто</th>
                <th scope="col">Формат</th>
                <th scope="col">Направления</th>
                <th scope="col">Помощь на площадке</th>
                <th scope="col">Статус</th>
                <th scope="col">Действия</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <th scope="row">{participant.name}</th>
                  <td>{participant.email}</td>
                  <td>{participant.organization || '—'}</td>
                  <td>{participant.role}</td>
                  <td>{formatLabels[participant.format]}</td>
                  <td>{trackLabels(participant.tracks)}</td>
                  <td>{participant.accessNeeds || '—'}</td>
                  <td>{statusLabels[participant.status]}</td>
                  <td>
                    {participant.format === 'online' ? (
                      'Не требуется'
                    ) : (
                      <div className="admin-actions">
                        {participant.status !== 'approved' && (
                          <button
                            className="btn btn--small"
                            type="button"
                            aria-label={`Подтвердить: ${participant.name}`}
                            onClick={() => changeStatus(participant.id, 'approved')}
                          >
                            Подтвердить
                          </button>
                        )}
                        {participant.status !== 'rejected' && (
                          <button
                            className="btn btn--small btn--secondary"
                            type="button"
                            aria-label={`Отклонить: ${participant.name}`}
                            onClick={() => changeStatus(participant.id, 'rejected')}
                          >
                            Отклонить
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
