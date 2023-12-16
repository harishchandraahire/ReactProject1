import React from "react";
import {Formik ,Field, Form , ErrorMessage} from "formik";
import * as yup from 'yup';

const ValidationComponent=()=>{
    return(
        <Formik initialValues={
            {
                Name : '',
                Salary : '',
                Email : ''
            }
        } 
        validationSchema=
            {
                yup.object({
                    Name : yup.string()
                            .min(4,"Please enter more than 4 words")
                            .max(10,"Please enter only 10 words name"),

                    Salary : yup.number
                            .required("Please Enter Salary"),
                    Email : yup.string()
                            .required("Please Enter Email")
                            .email("Invalid E-mail")
                })
            }
        onSubmit={
                values=>{
                    alert(JSON.stringify(values))
                }} >

                {
                    props=>(
                        <div>
                            <h3>Register User</h3>
                            <Form>
                                <dl>
                                    <dt>Name</dt>
                                    <dd><Field name="Name" type="text"></Field></dd>
                                    <dd><ErrorMessage name="Name"></ErrorMessage></dd>

                                    <dt>Salary</dt>
                                    <dd><Field name="Salary" type="text"></Field></dd>
                                    <dd><ErrorMessage name="Salary"></ErrorMessage></dd>

                                    <dt>Email</dt>
                                    <dd><Field name="Email" type="text"></Field></dd>
                                    <dd><ErrorMessage name="Email"></ErrorMessage></dd>
                                </dl>
                                <button>Submit</button>
                            </Form>
                        </div>
                    )
                }
        </Formik>
    )
}
export default ValidationComponent;