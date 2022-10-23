import { AdviceContainer } from './style';
import Maintext from  '../../Maintext';
import CardPracticeAdvice from  '../../CardPracticeAdvice';
import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';
import card4 from '../../../assets/card4.png';

const PracticeAdvice = () => (
    <AdviceContainer className="container d-flex flex-column py-5">
        <Maintext
        title="Practice Advice"
        description1="Problems trying to resolve the conflict between"
        description2="the two major realms of Classical physics: Newtonian mechanics"
        align="center"
        />
        <div className="row row-cols-md-4 row-cols-sm-1 justify-content-between g-3">
            <div className="col d-flex">
            <CardPracticeAdvice 
            title="Frauds or Mislead"
            description="Newton thought that light was made up of particles, but then it was discovered "
            image={card1}
            />
            </div>
            <div className="col d-flex">
            <CardPracticeAdvice 
                title="Bailes & Warrants"
                description="'Quantum mechanics' is the description of the behaviour of matter"
                image={card2}
            />
            </div>
            <div className="col d-flex">
            
            <CardPracticeAdvice 
                title="Federal Drug Crimes"
                description="They describe a uiverse consisting of bodies moving"
                image={card3}
            />
            </div>
            <div className="col d-flex">
            <CardPracticeAdvice 
                title="Traffic Related Crimes"
                description="They finally obtained a consistent description of the behaviour "
                image={card4}
            />
            </div>
        </div> 
    </AdviceContainer>
        
);

export default PracticeAdvice;


