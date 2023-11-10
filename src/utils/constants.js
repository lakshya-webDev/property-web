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

// property status
export const PropertyStatus=["active","inactive"]
export const PropertyFurnish=["Furnished","Unfurnished"]
export const Bedrooms=['1','2','3','4','5','6','7','8','9','10','11+'];
export const Bathroom=['1','2','3','4','5','6','7','8','9','10','11+'];
export const Amenities = ['Maids Room', 'Study', 'Balcony', 'Private Gym', 'Private Garden', 'Swimming Pool', 'Gymnasium', 'Covered Parking', 'Security', 'Concierge Service', 'Spa', 'Tennis Court', 'Golf Course', 'Mosque', 'Pet-Friendly', 'High-Speed Internet', 'Smart Home Technology', 'Built-in Wardrobes', 'Central Air Conditioning', 'Play Area for Children', 'Close to Public Transport', 'Restaurants', 'Shopping Malls', 'Beach Access', 'Marina Views'];
