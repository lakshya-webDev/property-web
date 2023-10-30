export const MAP_BASE_URL =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png";
export const MAP_RETINA_URL =
  "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png";
export const GEOAPIFY_MAP_URL =
  "https://api.geoapify.com/v1/geocode/autocomplete?text=";

export const MapStyles = {
  heroBanner: {
    width: "100%",
    height: "100%",
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
  propertyDetailedMap: {
    width: "100%",
    height: "300px",
  },
};

export const tileLayerOptions = {
  maxZoom: 20,
  id: "osm-bright",
  noWrap: true,
};
