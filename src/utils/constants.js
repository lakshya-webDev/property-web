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

let storedData;

if (typeof window !== "undefined") {
  storedData = JSON.parse(window.sessionStorage.getItem('authUser'));
} else {
  storedData = null; // or set a default value
}

export const sessionStatus = storedData ? storedData.isAuthenticated : false;

// propertyType

export const PropertyTypes=[
  {type:"Rent",title:"Property on Rent", iconUrl:"/images/rent-property.svg"},
  {type:"Sell",title:"Property on Sell", iconUrl:"/images/sell-property.svg"},
  {type:"Buy",title:"Property on Buy", iconUrl:"/images/buy-property.svg"}

]
