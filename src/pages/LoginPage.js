
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import axios from "axios"
import { useContext, useState } from "react"
import tokenContext from "../contexts/tokenContext"
import userContext from "../contexts/userContext"



export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {setToken} = useContext(tokenContext)
  const {setUser} = useContext(userContext)
  const navigate = useNavigate()



  function handleLogin(e) {
    e.preventDefault()

    const body = { email, password }

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/login`, body)

    promise.then(res => {
      console.log(res.data)
      setToken(res.data.token)
      setUser(res.data.checkUser.name)
      console.log(res.data.token)
      navigate("/home")
    })
    promise.catch(err => {
      alert(err.response.data.message)
      setPassword("")
      setEmail("")
    })

  }


  return (
    <Container>
      <img src={logo} alt="Logotipo" />
      <StyledForm onSubmit={handleLogin}>
        <StyledInput
          data-test="email"
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          data-test="password"
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <StyledButton data-test="sign-in-submit" type="submit">
          Entrar
        </StyledButton>
      </StyledForm>

      <StyledLink to="/cadastro">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(140, 16, 190);
  height: 100vh;
  img {
    margin-top: 65px;
  }
  @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
  padding-left: 25px;
  padding-right: 25px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 58px;
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
const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  text-decoration: none;
  color:  #FFFFFF;
`