import { Link } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";
import "./Pin.scss";
function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popup">
          <div className="popupContainer">
            <img src={item.images[0]} alt="" />
            <div className="textContainer">
              <Link to={`/${item.id}`}>{item.title}</Link>
              <span>{item.bedroom} bedrooms</span>
              <b>${item.price}</b>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
