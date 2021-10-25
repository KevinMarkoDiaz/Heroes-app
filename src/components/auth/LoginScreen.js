import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
 
export const LoginScreen = () => {

const dispatch = useDispatch();


  return (             
    <>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
                errors.email = 'Email is required !';
             } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
             ) {
                errors.email = 'Invalid email address';
             } else if (!values.password){
                errors.password = 'Password is required !'
             }
         return errors;
       }}
       onSubmit={({email, password}, { setSubmitting }) => {
         
        dispatch( startLogin(email, password))
        setSubmitting(false); 
       
      }}
     >
       {({ isSubmitting }) => (
         <Form>           
               <div className="backgroudCenter">
                    <div className="container ">                
                        <h2>
                            ¡Let's go!
                        </h2>
                        <div className="mb-3">
                           
                            <Field type="email" name="email" className="form-control" placeholder="Email"/>
                            <ErrorMessage name="email" component="div" className="formAlert"/>
                        </div>
                        <div className="mb-3">
                           
                            <Field type="password" name="password" className="form-control" placeholder="Password"/>
                            <ErrorMessage name="password" component="div" className="formAlert" />
                        </div>
           
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                              Submit
                         </button>
                    </div>
                </div> 
         </Form>
       )}
     </Formik>
   </>
  )
};
 
