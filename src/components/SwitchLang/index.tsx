import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';

const languages = [
  {
    image: 'https://cdn-icons-png.flaticon.com/128/3909/3909370.png',
    name: 'Português',
    value: 'ptBR',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/128/197/197560.png',
    name: 'Francais',
    value: 'fr',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/128/197/197484.png',
    name: 'English',
    value: 'en',
  },
];

export function SwitchLang() {
  const { t, i18n } = useTranslation();

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <header className='header'>
      <h1>{t('title')}</h1>
      {languages.map((lang) => (
        <button onClick={() => handleChangeLanguage(lang.value)}>
          <img src={lang.image} alt={lang.name} />
          <span>{lang.name}</span>
        </button>
      ))}
    </header>
  );
}
