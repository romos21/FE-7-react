import './Hotels.css';
import HotelsNotFound from "./HotelsNotFound/HotelsNotFound";
import Hotel from "./Hotel/Hotel";
import {useState} from "react";

function Hotels({hotels}) {

    const sliderLength = 4;
    const [sliderStartIndex, setSliderStartIndex] = useState(0);

    const handlePrevClick = () => {
        if(sliderStartIndex > 0) {
            setSliderStartIndex(sliderStartIndex - 1 );
        }
    }

    const handleNextClick = () => {
        if(sliderStartIndex < hotels.length - sliderLength) {
            setSliderStartIndex(sliderStartIndex + 1 );
        }
    }

    return hotels.length ?
        <div className='hotels-sec'>
            <button onClick={handlePrevClick}>prev</button>
            {
                hotels
                    .slice(sliderStartIndex, sliderLength + sliderStartIndex)
                    .map(hotel => <Hotel key={hotel.id} {...hotel}/>)
            }
            <button onClick={handleNextClick}>next</button>
        </div>
        : <HotelsNotFound/>

}

export default Hotels;
