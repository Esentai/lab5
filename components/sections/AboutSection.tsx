import { goals } from '@/data/conference';

export default function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div>
          <h2 id="about-title">О конференции</h2>
          <p className="section__lead">
            FES 2026 собирает frontend-разработчиков, студентов, преподавателей и исследователей,
            чтобы обсудить инженерную сторону веба на реальных кейсах.
          </p>
          <p>
            Программа идёт в один поток: шесть направлений, шесть больших докладов, и никому не
            приходится выбирать между двумя залами. Каждый доклад транслируется онлайн с субтитрами.
          </p>
        </div>

        <div>
          <h3>Цели конференции</h3>
          <ul className="checks">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>

          <h3>Конференция в цифрах</h3>
          <dl className="stats">
            <div>
              <dt>докладов</dt>
              <dd>6</dd>
            </div>
            <div>
              <dt>спикеров</dt>
              <dd>6</dd>
            </div>
            <div>
              <dt>участников</dt>
              <dd>450</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
