import { MadeByContainer } from './style';
import Networking from  '../../Networking';

const MadeBy = () => (
        <MadeByContainer className="container d-flex py-3 justify-content-center justify-content-md-between flex-wrap">
            <p className="text text-white ">Made With Love By Figmaland All Right Reserved</p>
            <Networking/>
        </MadeByContainer>

        
);

export default MadeBy;