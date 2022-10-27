import { MainContainer } from './style';
import OurPracticeAreas from  './OurPracticeAreas';
import PracticeAdvice from './PracticeAdvice';
import WhoWeAre from './WhoWeAre';
import Subscribe from './Subscribe';
import GetInTouch from './GetInTouch';

const Main = () =>  (
    <MainContainer className="container">
        <OurPracticeAreas />
        <PracticeAdvice id="practiceAdvice"/>
        <WhoWeAre id="whoWeAre"/>
        <Subscribe/>   
        <GetInTouch id="contact"/>            
    </MainContainer>    
);
    
export default Main;