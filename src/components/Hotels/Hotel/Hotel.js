import './Hotel.css';

function Hotel({city, country, imageUrl, name}) {

    return (
        <div className='hotel-card'>
            <img className='hotel-img' src={imageUrl} alt={name}/>
            <p>{city}, {country}</p>
            <p>{name}</p>
        </div>
    )
}

export default Hotel;
