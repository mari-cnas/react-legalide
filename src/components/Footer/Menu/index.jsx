import { MenuContainer } from './style';
import FooterColumn from  './FooterColumn';
import tel2 from '../../../assets/tel2.png';
import send2 from '../../../assets/send2.png';
import map2 from '../../../assets/map2.png';

const Menu = () => (
    <section id="footerMenu" className="d-flex ">
        <MenuContainer className="container ">
            <div className="container row d-flex justify-content-between row-cols-lg-5 row-cols-md-3 row-cols-sm-1">
                <FooterColumn className="col"
                title="Company Info"
                line1="About us"
                link1="www.google.com"
                line2="Carrier"
                link2="www.google.com"
                line3="We are hiring"
                link3="www.google.com"
                line4="Blog"
                link4="www.google.com"
                />
                <FooterColumn className="col"
                title="Legal"
                line1="About us"
                link1="www.google.com"
                line2="Carrier"
                link2="www.google.com"
                line3="We are hiring"
                link3="www.google.com"
                line4="Blog"
                link4="www.google.com"
                />
                <FooterColumn className="col"
                title="Features"
                line1="Bussiness Marketing"
                link1="www.google.com"
                line2="User Analytic"
                link2="www.google.com"
                line3="Live chat"
                link3="www.google.com"
                line4="Unlimited Support"
                link4="www.google.com"
                />
                <FooterColumn className="col"
                title="Resources"
                line1="IOS e Androind"
                link1="www.google.com"
                line2="Watch a Demo"
                link2="www.google.com"
                line3="Customers"
                link3="www.google.com"
                line4="API"
                link4="www.google.com"
                />
                <ul className="col list text-white py-5 ">
                    <h5 className="pb-2">Get in Touch</h5>
                    <li className="pb-2"><img src={tel2} alt="tel" className="me-2"/>(480) 555-0103</li>
                    <li className="pb-2"><img src={map2} alt="map" className="me-2"/>4517 Washington Ave</li>
                    <li className="d-flex pb-2 px-0"><img src={send2} alt="send" className="me-2"/>debra.holt@example.com</li>
                    
                </ul>
            </div>
        </MenuContainer>
    </section>
        
);

export default Menu;