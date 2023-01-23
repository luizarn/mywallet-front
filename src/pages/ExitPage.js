
import { useContext, useState } from "react"
import styled from "styled-components"
import tokenContext from "../contexts/tokenContext"
import axios from "axios"
import userContext from "../contexts/userContext"
import { useNavigate } from "react-router-dom"


export default function ExitPage() {
  const { token } = useContext(tokenContext)
  const { user } = useContext(userContext)
  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate();

  function handleExit(e) {
    e.preventDefault()

    let renderValue = Number(value)
    const body = { value: renderValue, description }

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/new-exit`, body, {
      headers:
        { Authorization: `Bearer ${token}`, user }
    })

    promise.then(res => {
      navigate("/home")
    })
    promise.catch(err => {
      alert(err.response.data.message)
      setDescription("")
      setValue("")
    })

  }

  return (
    <Container>
      <MenuContainer>
        <StyledTitle>Nova saída</StyledTitle>

      </MenuContainer>
      <StyledForm onSubmit={handleExit}>
        <StyledInput
          data-test="registry-amount-input"
          name="value"
          placeholder="Valor"
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <StyledInput
          data-test="registry-name-input"
          name="description"
          placeholder="Descrição"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <StyledButton type="submit" data-test="registry-save">
          Salvar saída
        </StyledButton>
      </StyledForm>
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
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 13px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};
  &::placeholder{
    color:  #000000;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
`

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  background: #A328D6;
  color: #FFFFFF;
`