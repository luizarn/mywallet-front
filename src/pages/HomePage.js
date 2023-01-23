
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import tokenContext from "../contexts/tokenContext"
import axios from "axios"
import userContext from "../contexts/userContext"
import { useNavigate } from "react-router-dom"


export default function HomePage() {

  const [records, setRecords] = useState([])
  const { token } = useContext(tokenContext)
  const { user, setUser } = useContext(userContext)
  let balance = 0;


  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, {
      headers:
        { Authorization: `Bearer ${token}`, user }
    })
    promise.then(res => {
      console.log(res.data)
      setRecords(res.data)
    })

    promise.catch(err => console.log(err.response.data))

  }, []);

  balance = records.reduce((accumulator, record) => {
    return record.type === 'entrance' ?
      accumulator + Number(record.value) :
      accumulator - Number(record.value);
  }, 0);


  function exitUser() {
    setUser(null)
    navigate("/")
  }

  function goToNewEntrance() {
    navigate("/nova-entrada")
  }

  function goToNewExit() {
    navigate("/nova-saida")
  }
  return (
    <Container>
      <MenuContainer>
        <StyledTitle data-test="user-name">Olá, {user}</StyledTitle>
        <ion-icon name="exit-outline" onClick={exitUser} data-test="logout"></ion-icon>
      </MenuContainer>
      <Records>
        <Organization>
          {records.length === 0 ? (
            <WithoutRecords>
              <span>
                <p>Não há registros de entrada ou saída</p>
              </span>
            </WithoutRecords>
          ) : (
            records.map(r => (
              <Record
              key={r.user}
                type={r.type}>
                <div>
                  <h1> {r.date} </h1>
                  <h2 data-test="registry-name"> {r.description} </h2>
                </div>
                <h3> {r.value.toFixed(2).replace('.', ',')} </h3>
              </Record>
            ))
          )}

        </Organization>
        {balance < 0 ? (
          <Balance type={'exit'}>
            <h1>SALDO</h1>
            <h2 data-test="total-amount">{(balance * -1).toFixed(2).replace('.', ',')}</h2>
          </Balance>
        ) : (
          <Balance type={'entrance'}>
            <h1>SALDO</h1>
            <h2 data-test="total-amount">{balance.toFixed(2).replace('.', ',')}</h2>
          </Balance>)}
      </Records>

      <OptionsContainer>
        <Option onClick={goToNewEntrance} data-test="new-income">
          <ion-icon name="add-circle-outline"></ion-icon>
          <div>
            <p>Nova</p>
            <p>entrada</p>
          </div>
        </Option>
        <Option onClick={goToNewExit} data-test="new-expense">
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
const Records = styled.div`
margin-top: 22px;
width: 326px;
height: 446px;
overflow-y:scroll;
background: #FFFFFF;
border-radius: 5px;
display: flex;
flex-direction:column;
justify-content: space-between;
padding: 23px 12px 10px; 
`

const Organization = styled.div`
display: flex;
flex-direction:column;
justify-content:flex-start;
  p{
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    background: #FFFFFF;
  }
  span{
      width: 180px;
    height: 46px;
    display:flex;
    flex-wrap: wrap;
    background-color: #FFFFFF;
  }
`
const WithoutRecords = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
width: 326px;
height: 446px;
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
  color:${props => props.type === 'exit' ? "#C70000" : "#03AC00"};
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
  color:${props => props.type === 'exit' ? "#C70000" : "#03AC00"};
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