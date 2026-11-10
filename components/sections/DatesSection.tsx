export default function DatesSection() {
  return (
    <section className="section" id="dates" aria-labelledby="dates-title">
      <div className="container">
        <h2 id="dates-title">Важные даты</h2>
        <ol className="dates">
          <li>
            <h3>Приём заявок на доклады</h3>
            <p className="dates__when">
              <time dateTime="2025-12-15">15 декабря 2025</time> —{' '}
              <time dateTime="2026-02-15">15 февраля 2026</time>
            </p>
          </li>
          <li>
            <h3>Ранняя регистрация</h3>
            <p className="dates__when">
              до <time dateTime="2026-03-31">31 марта 2026</time>
            </p>
          </li>
          <li>
            <h3>Конференция</h3>
            <p className="dates__when">
              <time dateTime="2026-05-15">15</time>–<time dateTime="2026-05-16">16 мая 2026</time>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
