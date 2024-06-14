import { Roboto, Jacques_Francois } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
// import { NextSeo } from 'next/seo';
// import Head from 'next/head';

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const i18nNamespaces = ['nav'];
export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const { t: tMeta } = await initTranslations(locale, ['meta']);

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link rel="alternate" href={`/${locale}`} hrefLang={locale} />
        <title>{tMeta('title')}</title>
        <meta name="description" content={tMeta('description')} />
      </head>
      <body className={`${roboto.className} p-2 md:p-6 flex flex-col gap-y-20`}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <NavBar />
        </TranslationsProvider>
        <div className="w-[95%] sm:min-w-[400px] max-w-[700px] self-center text-center px-4 py-2 rounded-3xl"></div>
        {children}
      </body>
    </html>
  );
}
