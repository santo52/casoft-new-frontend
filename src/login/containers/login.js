import React, { useRef } from 'react'
import styled from 'styled-components'
import { axiosLogin, axios } from '../../utils/axios'

const Login = () => {

  const passwordRef = useRef(null)
  const usernameRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    var formData = new FormData(e.target)
    formData.append('grant_type', 'password')

    axiosLogin.post("/oauth/token", new URLSearchParams(formData))
      .then(res => {
        
        const { accessToken, refreshToken, user } = res.data
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('isAuthenticated', true)

        window.location = '/'
      }).catch(err => {
        usernameRef.current.value = ''
        passwordRef.current.value = ''
      })


    return false
  }


  return (
    <Container>
      <div className="container-login100" style={{ backgroundImage: "url('/login/img-01.jpg')" }}>
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit} >
            <div className="login100-form-avatar">
              <img src="/profile.png" alt="AVATAR" />
            </div>

            <span className="login100-form-title">
              CASOFT
					  </span>

            <div className="wrap-input100 validate-input">
              <input ref={usernameRef} className="input100" type="text" name="username" placeholder="Username" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input alert" data-validate="prueba">
              <input ref={passwordRef} className="input100" type="password" name="password" placeholder="Password" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">
                Iniciar sesión
						  </button>
            </div>

            <div className="aditional-link">
              <a href="#" className="txt1">
                Recuperar contraseña
						  </a>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div.attrs({
  className: 'limiter'
})`
  width: 100%;
  margin: 0 auto;

  .aditional-link {
    text-align: center;
    width: 100%;
    padding-top: 25px;
  }



/*//////////////////////////////////////////////////////////////////
[ FONT ]*/

@font-face {
  font-family: Montserrat-Regular;
  src: url('/fonts/montserrat/Montserrat-Regular.ttf'); 
}

@font-face {
  font-family: Montserrat-ExtraBold;
  src: url('/fonts/montserrat/Montserrat-ExtraBold.ttf'); 
}

@font-face {
  font-family: Montserrat-Bold;
  src: url('/fonts/montserrat/Montserrat-Bold.ttf'); 
}


/*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

* {
	margin: 0px; 
	padding: 0px; 
	box-sizing: border-box;
}

body, html {
	height: 100%;
	font-family: Montserrat-Regular, sans-serif;
}

/*---------------------------------------------*/
a {
	font-family: Montserrat-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
	transition: all 0.4s;
}

a:focus {
	outline: none !important;
}

a:hover {
	text-decoration: none;
  color: #fff;
}

/*---------------------------------------------*/
h1,h2,h3,h4,h5,h6 {
	margin: 0px;
}

p {
	font-family: Montserrat-Regular;
	font-size: 14px;
	line-height: 1.7;
	color: #666666;
	margin: 0px;
}

ul, li {
	margin: 0px;
	list-style-type: none;
}


/*---------------------------------------------*/
input {
	outline: none;
	border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus, input:focus {
  border-color: transparent !important;
}

/*---------------------------------------------*/
button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}

iframe {
	border: none !important;
}


/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  font-family: Montserrat-Regular;
  font-size: 16px;
  color: #cccccc;
  line-height: 1.4;
}

.bo1 {
  border-bottom: 1px solid #999999;
}

.hov1:hover {
  border-color: #d33f8d;
}


/*//////////////////////////////////////////////////////////////////
[ login ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;  
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  position: relative;
  z-index: 1;
}

.container-login100::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(#e66465, #9198e5);
  opacity: 0.9;
}

.wrap-login100 {
  padding-bottom: 30px;
  width: 390px;
  background: transparent;
}



/*------------------------------------------------------------------
[  ]*/
.login100-form {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.login100-form-title {
  padding-top: 20px;
  padding-bottom: 45px;
  font-family: Montserrat-ExtraBold;
  font-size: 24px;
  color: #fff;
  line-height: 1.2;
  text-align: center;

  width: 100%;
  display: block;
}

/*---------------------------------------------*/
.login100-form-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  background: white;
}
.login100-form-avatar img {
  width: 100%;
}


/*---------------------------------------------*/
.wrap-input100 {
  margin-bottom: 10px;
  position: relative;
  width: 100%;
  z-index: 1;
}

.input100 {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.2;
  color: #333333;

  display: block;
  width: 100%;
  background: #fff;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 53px;
}


/*------------------------------------------------------------------
[ Focus ]*/
.focus-input100 {
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(0,91,234, 0.6);
}

.input100:focus + .focus-input100 {
  animation: anim-shadow 0.5s ease-in-out forwards;
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 80px 30px;
    opacity: 0;
  }
}

.symbol-input100 {
  font-size: 15px;
  color: #999999;

  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  pointer-events: none;

  transition: all 0.4s;
}

.input100:focus + .focus-input100 + .symbol-input100 {
  color: #00c6fb;
  padding-left: 23px;
}


/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login100-form-btn {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #e0e0e0;

  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;


  transition: all 0.4s;

  position: relative;
  z-index: 1;
}

.login100-form-btn::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  top: 0;
  left: 0;
  background: #005bea;
  background: linear-gradient(left, #005bea, #00c6fb);
  transition: all 0.4s;
  opacity: 0;
}

.login100-form-btn:hover {
  background: transparent;
  color: #fff;
}

.login100-form-btn:hover:before {
  opacity: 1;
}

.btn-face,
.btn-google {
  font-family: Raleway-Bold;
  font-size: 16px;
  line-height: 1.2;

  display: flex;
  justify-content: center;
  align-items: center;
  width: calc((100% - 10px) / 2);
  height: 40px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;

  transition: all 0.4s;
}


.btn-face {
  color: #3b5998;
}

.btn-face i {
  font-size: 20px;
  margin-right: 10px;
  padding-bottom: 1px;
}

.btn-google {
  color: #555555;
}

.btn-google img {
  width: 19px;
  margin-right: 10px;
  padding-bottom: 1px;
}


.btn-face:hover,
.btn-google:hover {
  border-color: #d33f8d;
}




.validate-input {
  position: relative;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: white;
  border: 1px solid #c80000;
  border-radius: 14px;
  padding: 4px 25px 4px 10px;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;

  font-family: Montserrat-Bold;
  color: #c80000;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f06a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 15px;
  top: 50%;
  transform: translateY(-50%);
  right: 13px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

@media (max-width: 576px) {
  .wrap-login100 {
    padding-top: 80px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
`


export default Login