import { AdviceCardContainer } from './style';



const CardPracticeAdvice = ({title, description,image, children}) => (
        <AdviceCardContainer className=" card" >
            
                <div className="card-body py-4 mx-3">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <img src={image} class="card-img-bottom" alt="card1"/>
           
        </AdviceCardContainer>
);

export default CardPracticeAdvice;

