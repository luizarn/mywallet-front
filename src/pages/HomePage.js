
import styled from "styled-components"



export default function HomePage() {

  return (
    <Container>
      <MenuContainer>
        <StyledTitle>Olá, Fulano</StyledTitle>
        <ion-icon name="exit-outline"></ion-icon>
      </MenuContainer>
      {/* <withoutRecords>
        <div>
          <p>Não há registros de entrada ou saída</p>
        </div>
      </withoutRecords> */}
    <Records>
      <div>
      <Record>
      <div>
      <h1> 30/11 </h1>
      <h2> Almoço mãe </h2>
      </div>
      <h3> 39,90 </h3>
      </Record>

      <Record>
      <div>
      <h1> 27/11 </h1>
      <h2> Mercado </h2>
      </div>
      <h3> 542,54 </h3>
      </Record>

      <Record>
        <div>
      <h1> 20/11 </h1>
      <h2> Compras churrasco </h2>
      </div>
      <h3> 67,60 </h3>
      </Record>
      </div>

      <Balance>
      <h1>SALDO</h1>
      <h2>2849,96</h2>
      </Balance>
      
    </Records>

      <OptionsContainer>
        <Option>
        <ion-icon name="add-circle-outline"></ion-icon>
        <div>
          <p>Nova</p>
          <p>entrada</p>
          </div>
        </Option>
        <Option>
        <ion-icon name="remove-circle-outline"></ion-icon>
        <div>
          <p>Nova</p>
          <p>saída</p>
          </div>
        </Option>
      </OptionsContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(140, 16, 190);
  height: 100vh;
  padding: 25px 24px 13px;
`

const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF; 
  align-self: flex-start;
`
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ion-icon{
    color:  #FFFFFF;
    width: 30px;
    height: 31px; }
`
const withoutRecords = styled.div`
margin-top: 22px;
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: center;
align-items:center;
div{
  width: 180px;
  height: 46px;
  display:flex;
  flex-wrap: wrap;
  background-color: #FFFFFF;
}
p{
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  background: #FFFFFF;
}
`

const Records = styled.div`
margin-top: 22px;
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction:column;
justify-content: space-between;
padding: 23px 12px 10px; 
`
const Record = styled.div`
margin-bottom: 18px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
div{
  display:flex;
  background: #FFFFFF;
  h1{
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
    background: #FFFFFF;
  }
  h2{
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    background: #FFFFFF;
    margin-left: 5px;
  }
}
h3{
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  background: #FFFFFF;
  color: #C70000;
  }
`
const Balance = styled.div`
display:flex;
justify-content: space-between;
background: #FFFFFF;
h1{
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #000000;
  background: #FFFFFF;
}
h2{
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: right;
  color: #03AC00;
  background: #FFFFFF;
}
`

const OptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Option = styled.div`
background: #A328D6;
border-radius: 5px;
width: 155px;
height: 114px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
margin: 8px;
padding: 10px;
  ion-icon{
    color:  #FFFFFF;
    width: 22px;
    height: 22px; }
  div{
    display: flex;
flex-direction: column;
      p{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
  }
}
`