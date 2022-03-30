import './Hotels.css';
import HotelsNotFound from "./HotelsNotFound/HotelsNotFound";
import Hotel from "./Hotel/Hotel";

function Hotels({hotels}) {

    return hotels.length ?
        <div className='hotels-sec'>
            {
                hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)

            }
        </div>
        : <HotelsNotFound/>

}

export default Hotels;
