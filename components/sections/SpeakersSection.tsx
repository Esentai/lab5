import { speakers } from '@/data/conference';

export default function SpeakersSection() {
  return (
    <section className="section" id="speakers" aria-labelledby="speakers-title">
      <div className="container">
        <h2 id="speakers-title">Спикеры</h2>
        <div className="speakers">
          {speakers.map((speaker) => (
            <article className="speaker" key={speaker.name}>
              <img src="/images/speaker.svg" width={400} height={300} loading="lazy" alt={speaker.alt} />
              <h3>{speaker.name}</h3>
              <p className="speaker__role">{speaker.role}</p>
              <p className="speaker__talk">
                <span className="speaker__label">Доклад</span> {speaker.talk}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
