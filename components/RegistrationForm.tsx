'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { flushSync } from 'react-dom';
import { roles, trackChoices } from '@/data/conference';
import { addParticipant, emailExists } from '@/lib/participants';

type FieldName = 'name' | 'email' | 'role' | 'format' | 'consent';
type FormErrors = Partial<Record<FieldName, string>>;
const fieldOrder: FieldName[] = ['name', 'email', 'role', 'format', 'consent'];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();

  if (name.length < 2) {
    errors.name = 'Укажите имя и фамилию.';
  }

  if (email === '') {
    errors.email = 'Укажите электронную почту.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Введите адрес в формате name@example.com.';
  } else if (emailExists(email)) {
    errors.email = 'Заявка с такой почтой уже отправлена.';
  }

  if (!data.get('role')) {
    errors.role = 'Выберите, кто вы.';
  }

  if (!data.get('format')) {
    errors.format = 'Выберите формат участия.';
  }

  if (!data.get('consent')) {
    errors.consent = 'Подтвердите согласие на обработку данных.';
  }

  return errors;
}

export default function RegistrationForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const newErrors = validate(data);
    const firstInvalid = fieldOrder.find((field) => newErrors[field]);

    setErrors(newErrors);

    if (firstInvalid) {
      setStatus('');
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const name = String(data.get('name')).trim();

    addParticipant({
      name,
      email: String(data.get('email')).trim(),
      organization: String(data.get('organization') ?? '').trim(),
      role: String(data.get('role')),
      format: String(data.get('format')),
      tracks: data.getAll('tracks').map(String),
      accessNeeds: String(data.get('access-needs') ?? '').trim(),
    });

    flushSync(() => {
      setStatus(`Спасибо, ${name}! Ваши данные будут обработаны. Если вы найдёте себя в списке участников, значит всё в порядке.`);
    });
    form.reset();
    statusRef.current?.focus();
  }

  return (
    <>
      <div className="form-status" role="status" tabIndex={-1} ref={statusRef} hidden={status === ''}>
        {status} <Link href="/participants">Открыть список участников</Link>
      </div>

      <form className="form" action="#" method="post" noValidate onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Имя и фамилия</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            aria-describedby="name-error"
            aria-invalid={errors.name ? true : undefined}
          />
          <p className="field__error" id="name-error">{errors.name}</p>
        </div>

        <div className="field">
          <label htmlFor="email">Электронная почта</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-describedby="email-hint email-error"
            aria-invalid={errors.email ? true : undefined}
          />
          <p className="field__hint" id="email-hint">Например, name@example.com</p>
          <p className="field__error" id="email-error">{errors.email}</p>
        </div>

        <div className="field">
          <label htmlFor="organization">
            Компания или вуз <span className="field__optional">(необязательно)</span>
          </label>
          <input id="organization" name="organization" type="text" autoComplete="organization" />
        </div>

        <div className="field">
          <label htmlFor="role">Кто вы</label>
          <select
            id="role"
            name="role"
            required
            defaultValue=""
            aria-describedby="role-error"
            aria-invalid={errors.role ? true : undefined}
          >
            <option value="">Выберите вариант</option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
          <p className="field__error" id="role-error">{errors.role}</p>
        </div>

        <fieldset className="field" aria-describedby="format-error">
          <legend>Формат участия</legend>
          <label className="choice">
            <input id="format" type="radio" name="format" value="offline" required /> Офлайн, IITU, Алматы
          </label>
          <label className="choice">
            <input type="radio" name="format" value="online" required /> Онлайн-трансляция
          </label>
          <p className="field__error" id="format-error">{errors.format}</p>
        </fieldset>

        <fieldset className="field">
          <legend>
            Интересные направления <span className="field__optional">(необязательно)</span>
          </legend>
          {trackChoices.map((track) => (
            <label className="choice" key={track.value}>
              <input type="checkbox" name="tracks" value={track.value} /> {track.label}
            </label>
          ))}
        </fieldset>

        <div className="field">
          <label htmlFor="access-needs">
            Нужна ли помощь на площадке <span className="field__optional">(необязательно)</span>
          </label>
          <textarea id="access-needs" name="access-needs" rows={3} aria-describedby="access-needs-hint" />
          <p className="field__hint" id="access-needs-hint">
            Например, сопровождение, место для коляски или перевод на жестовый язык.
          </p>
        </div>

        <div className="field">
          <label className="choice">
            <input
              id="consent"
              type="checkbox"
              name="consent"
              required
              aria-describedby="consent-error"
              aria-invalid={errors.consent ? true : undefined}
            />{' '}
            Согласен(на) на обработку персональных данных по политике конфиденциальности
          </label>
          <p className="field__error" id="consent-error">{errors.consent}</p>
        </div>

        <button className="btn" type="submit">Отправить заявку</button>
      </form>
    </>
  );
}
