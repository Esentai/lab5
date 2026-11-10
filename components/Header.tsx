'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/#about', label: 'О конференции' },
  { href: '/#tracks', label: 'Направления' },
  { href: '/#speakers', label: 'Спикеры' },
  { href: '/#program', label: 'Программа' },
  { href: '/#dates', label: 'Даты' },
  { href: '/#register', label: 'Регистрация' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/participants', label: 'Участники' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="logo" href="/" aria-label="FES 2026, на главную" onClick={() => setIsOpen(false)}>
          <img src="/images/favicon.svg" width={32} height={32} alt="" />
          <span>FES 2026</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          ref={toggleRef}
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={() => setIsOpen(!isOpen)}
        >
          Меню
        </button>

        <nav className={isOpen ? 'nav is-open' : 'nav'} id="primary-nav" aria-label="Основная навигация">
          <ul className="nav__list">
            {links.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  ref={index === 0 ? firstLinkRef : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
