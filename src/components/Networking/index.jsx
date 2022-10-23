import { NetworkingContainer } from './style';
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

const Networking = () =>  (
    <NetworkingContainer className="row d-flex align-items-center flex-wrap">
        <img src={face} alt="face" className="col"/>
        <img src={insta} alt="insta" className="col"/>
        <img src={twitter} alt="twitter" className="col"/>
        <img src={youtube} alt="youtube" className="col"/>

    </NetworkingContainer>
    );
    
    
export default Networking;