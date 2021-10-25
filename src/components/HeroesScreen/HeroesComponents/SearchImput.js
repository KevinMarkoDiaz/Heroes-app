import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { heroSearch } from '../../../actions/search';
import { useDispatch } from 'react-redux';

export const SearchImput = () => {
    const dispatch = useDispatch()
    return (
        <>
          <div>
            <Formik
                initialValues={{ search: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.search) {
                    errors.search = 'Required';
                    } 
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(heroSearch(values))
                  setSubmitting(false);
                }}
            >             
              {({ isSubmitting }) => (
                        <div className="container-sm mt-5">
                          <div className="row justify-content-md-start">
                          <div className="col col-lg-6 ">
                <Form className="d-flex">
                      <Field type="search" name="search" className="form-control me-2 shadow" />
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary shadow">
                       
                        <i className="fas fa-search"></i>
                        </button>
                  <ErrorMessage name="search" component="div" className="formAlert"/>
                  </Form>
                    </div>
                    </div>
                    </div>
              )}
            </Formik>
          </div>
        </>
    )
};


 

 
 

 