import { i18nConfig } from "@/i18n";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound, usePathname } from "next/navigation";
import { createTranslator, NextIntlClientProvider } from "next-intl";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MainContainer from "@/components/layout/MainContainer";

const { locales } = i18nConfig;

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale) {
  try {
    return (await import(`../../../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });
  return {
    title: t("Homepage.pageMeta.title"),
    description: t("Homepage.pageMeta.description"),
  };
}

function LocaleLayoutComponent({ children, locale, messages }) {
  const header = messages && messages.Homepage && messages.Homepage.header;
  const footer = messages && messages.Homepage && messages.Homepage.footer;

  return (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="web-layout flex flex-col min-h-full relative z-[-1]">
              <Navbar data={header} />
                <MainContainer>
                  {children}
                </MainContainer>
              <Footer data={footer} />
            </div>
          </NextIntlClientProvider>
  );
}

export default async function LocaleLayout({ children, params: { locale } }) {
  const { locales } = i18nConfig;
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  // Load translation messages for the current locale
  const messages = await getMessages(locale);

  return (
    <LocaleLayoutComponent locale={locale} messages={messages}>
      {children}
    </LocaleLayoutComponent>
  );
}
