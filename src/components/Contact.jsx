import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const Contact = () => {
  const position = [-1.272431, 116.8526536];

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>

        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <MapContainer center={position} zoom={12} style={{ height: '600px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} />
        </MapContainer>
      </div>
    </section>
  );
};

export default Contact;