export type Track = {
  title: string;
  description: string;
};

export type Speaker = {
  name: string;
  role: string;
  talk: string;
  alt: string;
};

export type ScheduleItem = {
  start: string;
  end: string;
  title: string;
  speaker?: string;
  track?: string;
};

export type ProgramDay = {
  id: string;
  date: string;
  dayTitle: string;
  dateLabel: string;
  caption: string;
  items: ScheduleItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Choice = {
  value: string;
  label: string;
};

export const goals: string[] = [
  'Показать, как измерять и улучшать скорость интерфейсов в продакшене.',
  'Обменяться архитектурными решениями для больших frontend-команд.',
  'Сделать доступность обычной частью инженерной работы.',
  'Связать университетские исследования с практикой индустрии.',
];

export const tracks: Track[] = [
  {
    title: 'Web Performance & Core Web Vitals',
    description: 'LCP, INP и CLS в полевых данных, бюджеты производительности, оптимизация загрузки.',
  },
  {
    title: 'Frontend Architecture',
    description: 'Микрофронтенды, монорепо и дизайн-системы в продуктах с десятками команд.',
  },
  {
    title: 'Accessibility & Inclusive Design',
    description: 'WCAG на практике, семантика, работа со скринридерами и инклюзивные паттерны.',
  },
  {
    title: 'Modern JavaScript & TypeScript',
    description: 'Новые возможности языка, строгая типизация и сопровождение большого кода.',
  },
  {
    title: 'Frameworks & Rendering',
    description: 'SSR, SSG, Server Components и islands: что выбрать и какой ценой.',
  },
  {
    title: 'Testing & DevTools',
    description: 'Надёжные end-to-end тесты, профилирование и инструменты отладки.',
  },
];

export const speakers: Speaker[] = [
  {
    name: 'Айгерим Сапарова',
    role: 'Staff Frontend Engineer, Aqsai Cloud',
    talk: 'INP в продакшене: как убрать 300 мс задержки из тяжёлого интерфейса',
    alt: 'Фото-заглушка: портрет Айгерим Сапаровой',
  },
  {
    name: 'Тимур Ахметов',
    role: 'Principal Architect, Steppeware',
    talk: 'Монорепо на 40 команд: дизайн-система и границы микрофронтендов',
    alt: 'Фото-заглушка: портрет Тимура Ахметова',
  },
  {
    name: 'Мадина Жумабаева',
    role: 'Accessibility Lead, Inclusio Lab',
    talk: 'Форма, которую можно заполнить: семантика, ошибки и фокус',
    alt: 'Фото-заглушка: портрет Мадины Жумабаевой',
  },
  {
    name: 'Даниил Ким',
    role: 'Senior Software Engineer, Typeforge',
    talk: 'Типы как документация: TypeScript в коде на миллион строк',
    alt: 'Фото-заглушка: портрет Даниила Кима',
  },
  {
    name: 'Елена Воронова',
    role: 'Frontend Lead, Orbita Media',
    talk: 'Islands или Server Components: выбираем рендеринг по данным',
    alt: 'Фото-заглушка: портрет Елены Вороновой',
  },
  {
    name: 'Арман Нургалиев',
    role: 'DevTools Engineer, Medeu Labs',
    talk: 'Нестабильные тесты под контролем: от трассировки до причины',
    alt: 'Фото-заглушка: портрет Армана Нургалиева',
  },
];

export const program: ProgramDay[] = [
  {
    id: 'day1',
    date: '2026-05-15',
    dayTitle: 'День 1',
    dateLabel: '15 мая',
    caption: 'Программа первого дня, 15 мая 2026',
    items: [
      { start: '09:00', end: '10:00', title: 'Регистрация и утренний кофе' },
      { start: '10:00', end: '10:30', title: 'Открытие конференции', speaker: 'Оргкомитет FES', track: 'Общая программа' },
      { start: '10:30', end: '11:30', title: 'INP в продакшене: как убрать 300 мс задержки из тяжёлого интерфейса', speaker: 'Айгерим Сапарова', track: 'Web Performance' },
      { start: '11:30', end: '12:00', title: 'Кофе-брейк' },
      { start: '12:00', end: '13:00', title: 'Монорепо на 40 команд: дизайн-система и границы микрофронтендов', speaker: 'Тимур Ахметов', track: 'Architecture' },
      { start: '13:00', end: '14:00', title: 'Обед' },
      { start: '14:00', end: '15:00', title: 'Форма, которую можно заполнить: семантика, ошибки и фокус', speaker: 'Мадина Жумабаева', track: 'Accessibility' },
      { start: '15:00', end: '15:30', title: 'Кофе-брейк' },
      { start: '15:30', end: '17:00', title: 'Воркшоп: аудит доступности реального интерфейса', speaker: 'Мадина Жумабаева', track: 'Accessibility' },
      { start: '17:00', end: '18:00', title: 'Панельная дискуссия: скорость, масштаб и доступность', speaker: 'Спикеры первого дня', track: 'Общая программа' },
    ],
  },
  {
    id: 'day2',
    date: '2026-05-16',
    dayTitle: 'День 2',
    dateLabel: '16 мая',
    caption: 'Программа второго дня, 16 мая 2026',
    items: [
      { start: '09:30', end: '10:00', title: 'Сбор участников и утренний кофе' },
      { start: '10:00', end: '11:00', title: 'Типы как документация: TypeScript в коде на миллион строк', speaker: 'Даниил Ким', track: 'JS & TypeScript' },
      { start: '11:00', end: '11:30', title: 'Кофе-брейк' },
      { start: '11:30', end: '12:30', title: 'Islands или Server Components: выбираем рендеринг по данным', speaker: 'Елена Воронова', track: 'Rendering' },
      { start: '12:30', end: '13:30', title: 'Обед' },
      { start: '13:30', end: '14:30', title: 'Нестабильные тесты под контролем: от трассировки до причины', speaker: 'Арман Нургалиев', track: 'Testing' },
      { start: '14:30', end: '15:00', title: 'Кофе-брейк' },
      { start: '15:00', end: '16:30', title: 'Воркшоп: профилирование интерфейса в DevTools', speaker: 'Арман Нургалиев', track: 'Testing' },
      { start: '16:30', end: '17:30', title: 'Панельная дискуссия: каким будет frontend через пять лет', speaker: 'Спикеры второго дня', track: 'Общая программа' },
      { start: '17:30', end: '18:00', title: 'Закрытие конференции', speaker: 'Оргкомитет FES', track: 'Общая программа' },
    ],
  },
];

export const faq: FaqItem[] = [
  {
    question: 'В каком формате пройдёт конференция?',
    answer: 'Формат гибридный: можно приехать в IITU в Алматы или смотреть прямую трансляцию всех докладов. Вопросы спикерам принимаются из зала и из чата.',
  },
  {
    question: 'Сколько стоит участие?',
    answer: 'Онлайн-трансляция бесплатна. Офлайн-билет стоит 15 000 ₸ при ранней регистрации и 25 000 ₸ после неё. Для студентов и преподавателей действует скидка 50%.',
  },
  {
    question: 'Выдаются ли сертификаты?',
    answer: 'Да. Именной электронный сертификат получат все зарегистрированные участники, которые посетили хотя бы один день офлайн или онлайн.',
  },
  {
    question: 'Будут ли записи докладов?',
    answer: 'Записи с субтитрами и слайды будут доступны всем зарегистрированным участникам в течение двух недель после конференции.',
  },
  {
    question: 'Доступна ли площадка для людей с инвалидностью?',
    answer: 'Да. В зале и корпусе есть пандусы, лифт, доступные санузлы и выделенные места для колясок. Трансляция идёт с субтитрами. Особые потребности можно указать в форме регистрации.',
  },
];

export const roles: string[] = [
  'Frontend-разработчик',
  'Студент',
  'Преподаватель',
  'Исследователь',
  'Другое',
];

export const trackChoices: Choice[] = [
  { value: 'performance', label: 'Web Performance' },
  { value: 'architecture', label: 'Frontend Architecture' },
  { value: 'accessibility', label: 'Accessibility' },
  { value: 'javascript', label: 'JavaScript & TypeScript' },
  { value: 'rendering', label: 'Frameworks & Rendering' },
  { value: 'testing', label: 'Testing & DevTools' },
];

export const socialLinks: Choice[] = [
  { value: 'https://example.com/fes2026/telegram', label: 'Telegram' },
  { value: 'https://example.com/fes2026/linkedin', label: 'LinkedIn' },
  { value: 'https://example.com/fes2026/youtube', label: 'YouTube' },
  { value: 'https://example.com/fes2026/github', label: 'GitHub' },
];
