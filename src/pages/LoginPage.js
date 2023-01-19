
import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


export default function LoginPage() {
    // const [form, setForm] = useState({ email: "", password: "" })
    // const [isLoading, setIsLoading] = useState(false)
    // const { setUser } = useContext(UserContext)
    // const navigate = useNavigate()

    // function handleForm(e) {
    //     setForm({ ...form, [e.target.name]: e.target.value })
    // }

    // function handleLogin(e) {
    //     e.preventDefault()
    //     setIsLoading(true)

    //     apiAuth.login(form)
    //         .then(res => {
    //             const { id, name, image, token } = res.data
    //             setIsLoading(false)
    //             setUser({ id, name, image, token })
    //             // localStorage.setItem("token", token)
    //             localStorage.setItem("user", JSON.stringify({ id, name, image, token }))
    //             navigate("/hoje")
    //         })
    //         .catch(err => {
    //             setIsLoading(false)
    //             alert(err.response.data.message)
    //         })
    // }

    return (
        <Container>
            <img src={logo} alt="Logotipo" />
            <StyledForm >
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                />
                <StyledButton type="submit">
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