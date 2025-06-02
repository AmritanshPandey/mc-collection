import MainHeader from '../../components/Header/MainHeader';
import EntertainementBanner from "../../assets/images/entertainment.png";
import './style.css';
import FeatureCardCarousel from '../../components/FeatureCardCarousel';
import ExperienceCarousel from '../../components/ExperienceCarousel';
import TitleWithButton from '../../components/TitleWithButton';
import { entertainmentItems, featuredArtist, experienceEntertainment } from '../../data/dining-data';
import DiningFooter from '../../assets/images/dining-footer.png'
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import V1 from '../../assets/images/V1.png';
import V2 from '../../assets/images/V2.png';
import V3 from '../../assets/images/V3.png';
import V4 from '../../assets/images/V4.png';
import V5 from '../../assets/images/V5.png';
import V6 from '../../assets/images/V6.png';
import V7 from '../../assets/images/V7.png';
import V8 from '../../assets/images/V8.png';
import EntertainmentAd from '../../assets/images/entertainment-ad.png';
import EntertainmentFooter from '../../assets/images/entertainment-footer.png';
import BackHeader from '../../components/Header/BackHeader';

const Entertainment = () => {
  return (
    <div className='page-content'>
      <div className='header-section'>
        <BackHeader />
        <img src={EntertainementBanner} className='main-banner' alt="Dining Banner" />
      </div>

      {/* Experiences hero carousel */}
      <FeatureCardCarousel items={entertainmentItems} />




      {/* Hotspot Restaurants section */}
      <TitleWithButton
        title="Featured artists"
        description="Exclusive access to once-in-a-lifetime experiences with the biggest music icons"
        buttonText="View all"
      />
      <ExperienceCarousel experience={featuredArtist} />

      <div className='carousel-heading-container'>
        <span className='heading-medium'>Experience live music on exclusive stages</span>
      </div>


      <div className='event-stage-container'>
        <img src={V1} className='stage-image' alt='venue' />
        <img src={V2} className='stage-image' alt='venue' />
        <img src={V3} className='stage-image' alt='venue' />
        <img src={V4} className='stage-image' alt='venue' />
        <img src={V5} className='stage-image' alt='venue' />
        <img src={V6} className='stage-image' alt='venue' />
        <img src={V7} className='stage-image' alt='venue' />
        <img src={V8} className='stage-image' alt='venue' />
      </div>

      <img src={EntertainmentAd} alt='banner' className='e-banner' />
      {/* Experiences section */}
      <TitleWithButton
        title="Popular priceless experiences"
        description=""
        buttonText="View all"
      />
      <ExperienceCarousel experience={experienceEntertainment} />
      <Spacer height={24} />
      <div className='footer-container'>
        <img src={EntertainmentFooter} className='faq-banner' alt="FAQ Banner" />
        <Footer />
      </div>
    </div>
  );
};

export default Entertainment;
