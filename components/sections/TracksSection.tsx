import { tracks } from '@/data/conference';

export default function TracksSection() {
  return (
    <section className="section section--alt" id="tracks" aria-labelledby="tracks-title">
      <div className="container">
        <h2 id="tracks-title">Направления</h2>
        <ul className="tracks">
          {tracks.map((track) => (
            <li className="track" key={track.title}>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
