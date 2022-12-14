import React, {LegacyRef, MouseEventHandler, MutableRefObject, useContext, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";

import styles from "./Login.module.css";
import API from "../../http/API";
import {Context} from "../../index";

const Login = () => {
    const {user} = useContext(Context)
    const toPage = useNavigate()

    const formData= {
        email: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null)
    }

    const sendData = async (e:React.MouseEvent) => {
        e.preventDefault()
        const data = {
            email: formData?.email?.current?.value,
            password: formData?.password?.current?.value
        }
        API.login(data)
            .then((data)=>{
                    user.data = data
                    user.isAuth = true
                    toPage('/shop')
                }
            )
            .catch(({message, response} )=> console.log(message, response?.data?.message))
    }

    return (
        <form className={styles.root}>
            <div className={styles.description}>Авторизация</div>
            <input
                ref={formData.email}
                placeholder="Email"
                className={styles.usernameFill}
            />
            <input
                ref={formData.password}
                placeholder="Пароль"
                type='password'
                className={styles.passwordFill}
            />
            <div className={styles.footer}>
                <div>
                    <span>Нет аккаунта?</span>
                    <Link className={styles.redirect} to='/registration'>Создать</Link>
                </div>
                <button
                    type='submit'
                    className={styles.button_submit}
                    onClick={(e:React.MouseEvent) => sendData(e)}
                >Войти
                </button>
            </div>
        </form>
      );
};

export default Login;
