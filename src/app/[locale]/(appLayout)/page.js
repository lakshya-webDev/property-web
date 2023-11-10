import Grid from "@/components/Grid";
import HeroBanner from "@/components/HeroBanner";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

async function getProperties() {
  try {
    const data = await import(`/JSON/property.json`);
    return data.default;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export default async function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const fetchData = async () => {
    const properties = await getProperties();
    return properties;
  };
  const properties = await fetchData();
  return (
    <React.Fragment>
      <HeroBanner />
      <Grid locale={locale} data={properties} />
    </React.Fragment>
  );
}
