import { NetworkingContainer } from './style';
import face from '../../assets/face.png';
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';

const Networking = () =>  (
    <NetworkingContainer className="d-flex list-unstyled">
        <li className="mx-2"><a href="https://www.facebook.com"><img src={face} alt="face" className="col"/></a></li>
        <li className="mx-2"><a href="https://www.instagram.com"><img src={insta} alt="insta" className="col"/></a></li>
        <li className="mx-2"><a href="https://www.twitter.com"><img src={twitter} alt="twitter" className="col"/></a></li>
        <li className="mx-2"><a href="https://www.youtube.com"><img src={youtube} alt="youtube" className="col"/></a></li>

    </NetworkingContainer>
    );
    
    
export default Networking;