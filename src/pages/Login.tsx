import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Title } from '../components/Title/styles'
import { Subtitle } from '../components/Subtitle/styles'
import { Input } from '../components/Input'
import { Button } from '../components/Button/index'
import { Form } from '../components/Form/Form'
import { Checkbox } from '../components/Checkbox'
import loginImage from '../assets/images/login-image.png'
import { ContainerLogin } from '../components/ContainerLogin/style'
import { postLogin } from '../services/auth/auth'

// predicao@w3erp.com.br / 123456

export function Login() {
  const [stateLogin, setStateLogin] = useState('')
  const [statePassword, setStatePassword] = useState('')
  // const navigate = useNavigate()

  const doLogin = async () => {
    const result = await postLogin(stateLogin, statePassword)
    if (result.logged) {
      window.location.href = '/'
      return
    }
    alert(result.message)
  }

  return (
    <ContainerLogin>
      <div className="leftContainer">
        <Form>
          <div className="textLoginContainer">
            <Subtitle fontSize={20}>Seja bem vindo!</Subtitle>
            <Title fontSize={36}>Realize seu login</Title>
          </div>
          <Input
            label="E-Mail"
            placeholder="Insira seu e-mail"
            inputState={stateLogin}
            inputSetState={setStateLogin}
          />
          <Input
            label="Senha"
            placeholder="Insira sua senha"
            inputState={statePassword}
            inputSetState={setStatePassword}
          />
          <Button text="Entrar" variant="login" onClick={() => doLogin()} />
          <div id="checkbox-remember">
            <Checkbox />
            <a href="teste">
              <Subtitle fontSize={16}>Esqueci minha senha</Subtitle>
            </a>
          </div>
        </Form>
      </div>
      <div>
        <img
          src={loginImage}
          alt="Acompanhe as suas vendas de um jeito fácil e simples."
        />
      </div>
    </ContainerLogin>
  )
}
