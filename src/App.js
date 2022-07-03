import styled from 'styled-components/macro'
import './App.css';
import PayForm from './components/Form/PayForm';
import FormImg from './images/form-img.png'
import Fade from 'react-reveal'

const PageWrapper =styled.div`
  display: flex;
  width:100vw;
  height:100vh;
`


const MainPage= styled.div`
  display: flex;
  margin: auto auto;

  @media(max-width:850px){
    flex-direction: column-reverse;
    align-items:center;
  }
`

const FormPart= styled.div`
    background: rgba(168, 94, 180, 0.1);
    width:50%;
    @media(max-width:768px){
      width:90%;
    }
    

`
const FormHeader = styled.div`
padding: 1rem;


  h2{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #171717;
    text-align:center;

  }

`

const ImagePart = styled.div`
  width:50%;
  @media(max-width:768px){
    width:90%;
    display:flex;
    justify-content:center;
    margin-bottom: 2rem;
  }
  
  
  img{
    width:80%;
    height:100%;
    object-fit: cover;
  }


`

const App=()=> {
  return (
    <PageWrapper>
    <MainPage>
      <FormPart>
        <Fade left cascade={true}>
        <FormHeader>
          <h2>Fill in your details and amount to complete payment</h2>
        </FormHeader>
      <PayForm/>
      </Fade>
      </FormPart>
      <ImagePart>
      <Fade right cascade={true}>
      <img src={FormImg} alt="form-img"/>
      </Fade>
      </ImagePart>



    </MainPage>
    </PageWrapper>
  );
}

export default App;
