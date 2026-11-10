export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <h1 id="hero-title">Frontend Engineering Summit 2026</h1>
        <p className="hero__lead">
          Два дня о производительности, архитектуре и доступности веб-интерфейсов
        </p>
        <ul className="hero__meta">
          <li>
            <time dateTime="2026-05-15">15</time>–<time dateTime="2026-05-16">16 мая 2026</time>
          </li>
          <li>Алматы, IITU</li>
          <li>Офлайн и онлайн-трансляция</li>
        </ul>
        <a className="btn" href="#register">
          Зарегистрироваться
        </a>
      </div>
    </section>
  );
}
