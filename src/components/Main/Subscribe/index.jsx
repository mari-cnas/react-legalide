import {  SubsBox,SubscribeBtn } from './style';
import hooli from '../../../assets/hooli.png';
import lyft from '../../../assets/lyft.png';
import hat from '../../../assets/hat.png';
import stripe from '../../../assets/stripe.png';
import aws from '../../../assets/aws.png';
import et from '../../../assets/et.png';

const Subscribe = () => (
    <>
    <div className="container">
        <div className="row row-cols-md-6 row-cols-1 d-flex justify-content-between align-items-center py-5 flex-wrap">
            <div className="col d-flex justify-content-center mb-4"><img src={hooli} alt="card1" /></div>
            <div className="col d-flex justify-content-center mb-4"><img src={lyft} alt="card1"/></div>
            <div className="col d-flex justify-content-center mb-4"><img src={hat} alt="card1"/></div>
            <div className="col d-flex justify-content-center mb-4"><img src={stripe} alt="card1" /></div>
            <div className="col d-flex justify-content-center mb-4"><img src={aws} alt="card1"/></div>
            <div className="col d-flex justify-content-center mb-4"><img src={et} alt="card1"/> </div>                   
        </div>
    </div> 
        <SubsBox className="container">
            <div className="row align-items-center">
                <p className="col col-12 col-md-6 text-center text-md-start text-white mb-0 ">Subscribe For Latest Newsletter</p>
                <div className="col input-group py-2">
                    <input type="text" className="form-control py-3" placeholder="Your email" aria-label="Your email" aria-describedby="button-addon2"></input>
                    <SubscribeBtn className="btn d-flex align-items-center" type="button" id="button-addon2">Subscribe</SubscribeBtn>
                </div>
            </div>
        </SubsBox>
        </>
);

export default Subscribe;

