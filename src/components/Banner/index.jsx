import { BannerContainer } from './style';
import woman from '../../assets/agent.png';

const Banner = () => (
    <BannerContainer>
        <section >
            <div className="container">
                <header>
                    <nav className="  d-none d-md-block">
                        <div className="d-flex justify-content-between">
                        <div>
                            <p id="logo">Legalide</p>
                        </div>
                        <div > 
                            <a href="#practiceAreas" className="me-4">Practice Areas</a>
                            <a href="#practiceAdvice" className="me-4">Practice Advice</a>
                            <a href="#whoWeAre" className="me-4">Who we are</a>
                            <a href="#contact" className="me-4">Contact</a>
                            
                        </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-dark navcolor fixed-top d-md-none">
                        <div class="container-fluid ">
                        <p>Legalide</p>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end navcolor" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Legalide</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#practiceAreas">Practice Areas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#practiceAdvice">Practice Advice</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#whoWeAre">Who we are</a>
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
                <div className="row row-cols-sm-1 row-cols-lg-2 mt-5">
                    <div className="col d-flex flex-column justify-content-center">
                            <div className="mt-3">
                                <h1>LEGAL PRO SERVICES</h1>
                                <p className="my-0">We know how large objects will act,</p>
                                <p>things on a small scale.</p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                <button className="btn1 text mb-3 me-2 ">Get Quote Now</button>
                                <button className="btn2 text mb-3 ">Learn More</button>
                            </div>
                    </div>
                    <div className="col">
                        <img src={woman} alt="woman" className="img-fluid" />
                    </div>
                </div>

            </div>
        </section>
    </BannerContainer>
);


export default Banner;