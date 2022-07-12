import React from "react";
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const loginFormSchema = Yup.object().shape({
    password: Yup.string()
        .min(5, 'Must be longer than 5 characters')
        .required('Required')
});

const Login = (props) => {

    if (props.isAuth) return <Navigate to='/profile' />
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email adress';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, setStatus }) => {
                    props.login(values.email, values.password, values.rememberMe, setSubmitting, setStatus);
                    setSubmitting(true);
                }}
                validationSchema={loginFormSchema}>
                
                {() => (

                    <Form>
                        <div>
                            <Field type={'email'} name={'email'} placeholder={'e-mail'} />
                        </div>
                        <ErrorMessage name='email' component='div' className={classes.errorMessage} />
                        <div>
                            <Field type={'password'} name={'password'} placeholder={'password'} />
                        </div>
                        <ErrorMessage name='password' component='div' className={classes.errorMessage} />

                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} />
                            <label htmlFor={'rememberMe'}>remember me</label>
                        </div>
                        <button type={'submit'} >Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);