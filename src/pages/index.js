import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../live/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Pablo Jakubowicz Curriculum Vitae'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Pablo Jakubowicz Curriculum Vitae'} />
      </Helmet>
      <App />
    </>
  );
};
