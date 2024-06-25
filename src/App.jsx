import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet'

export function App(){

    //Markers : pins
    const markers = [
        {
            geocode : [43.669674, 1.282029],//VOir comment récupérer ces valeurs avec seulement un adresse
            popUp : "Hello Je suis le test de Laura " // mettre ici le nom de l'activité/restaurant/hebergement/...
        },
        {
            geocode : [43.5519279, 1.4881832],
            popUp : "Buenos dias muchachos !"
        }
    ]

    return(
        //center sur toulouse
        <MapContainer center={[43.6, 1.4333]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                markers.map(marker => (
                    <Marker position={marker.geocode}>
                            <Popup>{marker.popUp}</Popup>
                    </Marker>
                    
                ))
            }
        </MapContainer>
    )
}