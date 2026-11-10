import { socialLinks } from '@/data/conference';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h2>Контакты</h2>
          <address>
            Оргкомитет FES 2026
            <br />
            IITU, ул. Манаса, 34/1, Алматы
            <br />
            <a href="mailto:info@fes2026.example">info@fes2026.example</a>
            <br />
            <a href="tel:+77270000000">+7 727 000 00 00</a>
          </address>
        </div>

        <div>
          <h2>Соцсети</h2>
          <ul className="site-footer__links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.value} rel="noopener">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
