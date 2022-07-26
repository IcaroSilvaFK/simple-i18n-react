import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SwitchLang } from './components/SwitchLang';

import './styles/app.scss';

function App() {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <SwitchLang />
      <h1>{t('welcome')}</h1>
      <strong>{t('whereYouCan')}</strong>
    </div>
  );
}

export default App;
