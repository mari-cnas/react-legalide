import { AreasContainer } from './style';
import Maintext from  '../../Maintext';
import CardPracticeAreas from  '../../CardPracticeAreas';
import balance from '../../../assets/006-balance.png';
import auction from '../../../assets/001-auction.png';
import accept from '../../../assets/005-accept.png';

const OurPracticeAreas = () => (
    <AreasContainer className="container d-flex flex-column align-items-center my-5">
        <Maintext
            title="Our Practice Areas"
            description1="Problems trying to resolve the conflict between"
            description2="the two major realms of Classical physics: Newtonian mechanics"
            align="center"
        />
        <div className="row row-cols-1 row-cols-md-3 w-100 justify-content-between g-3">
            <div className="col d-flex ">
            <CardPracticeAreas 
            icon={balance}
            description="Family Law"
            /></div>
		     <div className="col d-flex ">
            <CardPracticeAreas 
            icon={auction}
            description="Business Law"
            />
            </div>
            <div className="col d-flex ">
            <CardPracticeAreas 
            icon={accept}
            description="Trust & Estates"
            />
            </div>
            
        </div> 
        
        
    </AreasContainer>
        
);

export default OurPracticeAreas;

