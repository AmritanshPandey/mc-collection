import './style.css';
import ChevronRight from "../../assets/icons/chevron-right-black.svg";

const TitleWithButton = ({
  title = "Experiences",
  description = "Enjoy uniquely curated menus, special treatment, and other experiences",
  buttonText = "View all",
  onButtonClick = () => {}
}) => {
  return (
    <div className='hotspot-text-button-container'>
      <div className='hotspot-text-container'>
        <span className='title-medium'>{title}</span>
        <div className='hotspot-body-text-container'>
          <label>{description}</label>
        </div>
      </div>

      <div className='view-button-container' onClick={onButtonClick} style={{ cursor: 'pointer' }}>
        <span>{buttonText}</span>
        <img src={ChevronRight} className='icon16' alt="View" />
      </div>
    </div>
  );
};

export default TitleWithButton;
