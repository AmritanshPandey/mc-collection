import MainHeader from '../../components/Header/MainHeader';
import TravelBanner from "../../assets/images/travel.png";
import { useNavigate } from 'react-router-dom';
import LoungeBanner from "../../assets/images/lounge.png";
import CategoryBanner from "../../components/CategoryBanner";
import FastTrackBanner from "../../assets/images/fast-track.png";
import ClubBanner from "../../assets/images/dinning-club.png";
import Footer from '../../components/Footer';
import FAQ from "../../assets/images/faq.png";
import "./style.css";
import BackHeader from '../../components/Header/BackHeader';

const Travel = () => {
  const navigate = useNavigate();
  return (
    <div className='page-content'>
      <div className='header-section'>
        <BackHeader />
        <img src={TravelBanner} className='main-banner' alt="Dining Banner" />
      </div>
      <div className='header-text-container'>
        <span className='subheading'>
          Skip the security lines, relax in premium airport lounges, and savour gourmet dining - all before you board your flight.

        </span>
      </div>

      <div className='category-lisitng-container'>
        <span className='heading-medium'>Exclusive travel benefits</span>
        <CategoryBanner
          image={LoungeBanner}
          title="Lounge access"
          buttonText="Explore"
        />
        <CategoryBanner
          image={FastTrackBanner}
          title="Fast track"
          buttonText="Explore"
        />

        <CategoryBanner
          image={ClubBanner}
          title="Dining club"
          buttonText="Explore"
        />
      </div>

      <div className='footer-container'>

        <Footer />
      </div>
    </div>
  );
}

export default Travel;
