import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm, Field} from 'redux-form'
import style from './login.module.css'
//import { loginUser } from '../../redux/auth-reducer';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} 
                component='input'
                name={'email'}/>
            </div>
            <div>
                <Field placeholder={'Password'} 
                component='input'
                name={'password'} type={'password'}/>
            </div>
            <div>
            <Field type={'checkbox'} 
                component='input' 
                name={'rememberMe'}/> remember me 
            </div>
            {props.error && <div className={style.formSummeryError}>{props.error}</div>}
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        //props.loginUser(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/home'} />
    }
    return (
        <>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}


export default connect(null,// {loginUser}
    )(Login);
