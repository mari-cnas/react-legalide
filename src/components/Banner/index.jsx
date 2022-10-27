import { BannerContainer } from './style';
import woman from '../../assets/agent.png';
import { HiSearch } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Banner = () => (
    <BannerContainer>
        <section className="mt-3">
            <div className="container">
                <header>
                    <nav className="  d-none d-md-block">
                        <div className="d-flex justify-content-between">
                        <div>
                            <p id="logo">Legalide</p>
                            
                        </div>
                        <div > 
                            <a href="#practice-areas" className="me-4">Practice Areas</a>
                            <a href="#practice-advice" className="me-4">Practice Advice</a>
                            <a href="#who-we-are" className="me-4">Who we are</a>
                            <a href="#contact" className="me-4">Contact</a>
                            
                        </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-dark navcolor fixed-top d-md-none">
                        <div class="container-fluid ">
                            <div class="d-flex flex-row w-100 align-items-baseline justify-content-between mt-2">
                                <p>Legalide</p>
                                <div class="d-flex align-items-center ">
                                    <div class="mx-2" ><HiSearch/></div>
                                    <div class="mx-2" ><AiOutlineShoppingCart/></div>
                                    <button class="navbar-toggler mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="offcanvas offcanvas-end navcolor" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Legalide</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#practice-areas">Practice Areas</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#practice-advice">Practice Advice</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#who-we-are">Who we are</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="row row-cols-sm-1 row-cols-lg-2 ">
                    <div className="col mt-5">
                            <div className="d-flex flex-column align-items-center align-items-md-start mt-5 ">
                                <h1 className="d-flex text-center text-md-start ">LEGAL PRO SERVICES</h1>
                                <p className="d-flex text-center text-md-start my-0">We know how large objects will act,</p>
                                <p className="d-flex text-center text-md-start ">things on a small scale.</p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                <button className="btn1 text mb-3 me-2 ">Get Quote Now</button>
                                <button className="btn2 text mb-3 ">Learn More</button>
                            </div>
                    </div>
                    <div className="col d-flex justify-content-center mt-5">
                        <img src={woman} alt="woman" className="img-fluid align-self-center " />
                    </div>
                </div>

            </div>
        </section>
    </BannerContainer>
);


export default Banner;