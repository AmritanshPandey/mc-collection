import ChevronRight from '../../assets/icons/chevron-right-black.svg';
import './style.css'
const PopularVenueCard = ({ image, venueName, location }) => {
  return (
    <div className='popular-venue-container'>
      <div className='popular-venue-card'>
        <div className='venue-image-info'>
          <img src={image} className='venue-image' alt='venue' />
          <div className='venue-info'>
            <div className='venue-text'>
              <span className='subheading-bold'>{venueName}</span>
              <span>{location}</span>
            </div>
            <img src={ChevronRight} className='icon24' alt='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVenueCard;