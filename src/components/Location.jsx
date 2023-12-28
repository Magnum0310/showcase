import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SocialBar from "./SocialBar";
import { ScrollRestoration } from "react-router-dom";

const Location = () => {
  return (
    <div className="padding min-h-screen snap-start font-montserrat text-white">
      <div className="flex  py-5 max-lg:flex-col">
        <div className=" flex flex-1 items-center justify-center ">
          <div className="ml-5 flex flex-1 max-xl:hidden">
            <SocialBar />
          </div>
          <div className=" mb-5 ml-32 mr-10 flex flex-col gap-10 max-xl:ml-0">
            <h1 className="text-4xl font-bold">FEEL FREE TO CONTACT US</h1>
            <div className="flex gap-10">
              <div className=" text-text-gray">
                <p className="py-2">Phone:</p>
                <p className="py-2">Address:</p>
                <p className="py-2">Email:</p>
                <div className="mt-10">
                  <p className="break-words">Hours of operations:</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="py-2">+63 999 999 999</p>
                <p className="py-2">Somewhere down the road</p>
                <p className="py-2">test@email.com</p>
                <div className="mt-10 flex-1">
                  <p>Everyday</p>
                  <p>10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MapContainer
          center={[14.57785, 121.036087]}
          zoom={13}
          scrollWheelZoom={false}
          className=" -z-10 lg:flex-1"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[14.57785, 121.036087]}>
            <Popup>
              RENTZ. <br />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Location;
