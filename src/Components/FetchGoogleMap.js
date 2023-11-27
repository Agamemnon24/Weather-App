import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const googleAPI = "AIzaSyAy-kfVk4CHa6HM7Y3YCyrbUY3g7XTu9q4";
const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "300px",
};

const FetchGoogleMap = ({lat, lon}) => {

  const center = {
    lat: parseFloat(lat), // default latitude
    lng: parseFloat(lon), 
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: googleAPI,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default FetchGoogleMap
