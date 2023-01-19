
import styled from "styled-components"



export default function ExitPage() {

  return (
    <Container>
      <MenuContainer>
        <StyledTitle>Nova saída</StyledTitle>
        <ion-icon name="exit-outline"></ion-icon>
      </MenuContainer>
      <StyledForm >
                <StyledInput
                    name="value"
                    placeholder="Valor"
                    type="number"
                    required
                />
                <StyledInput
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    required
                />
                <StyledButton type="submit">
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