import React from 'react';
import ReactDOM from 'react-dom';
import {useFormik} from 'formik';

const validateProduct = productData => {
    const errors = {}
    if(!productData.Name) {
        errors.Name = 'Product Name Required';
    } else if(productData.Name.length<4) {
        errors.Name = 'Name too short..Min 4 required';
    }

    if(!productData.Price) {
        errors.Price = 'Product Price Required';
    } 
    
    if(!productData.Code) {
        errors.Code = 'Product Code Required';
    } else if (!/[A-Z]{3}[0-9]{2}/.test(productData.Code)) {
        errors.Code = 'Invalid Code..';
    }
   return errors;
}

const RegisterProductComponent = () => {
    const formik = useFormik({
        initialValues: {
            Name: '',
            Price: '',
            Code: ''
        },
        validate: validateProduct,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div>
            <div className='border border-info rounded m-5 p-4'>
            <h2>Register Product</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>                    
                    <input name="Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Name} type="text" />
                    <div className="text-danger">
                        {(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}
                    </div>                    
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} name="Price" value={formik.values.Price} />
                    <div className="text-danger">
                        {(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}
                    </div>
                </div>
                <div className="form-group">
                   <label>Code</label>
                    <input onBlur={formik.handleBlur} onChange={formik.handleChange} name="Code" value={formik.values.Code} type="text" />
                    <div className="text-danger">
                        {(formik.touched.Code && formik.errors.Code)?formik.errors.Code:null}
                    </div>
                </div>
                <div className="form-group">
                    <button className='btn btn-outline-info'>Register</button>
                </div>
            </form>
        </div>
        
        </div>
    )
}
// ReactDOM.render(
//     <RegisterProductComponent />,
//     document.getElementById("root")
// );
export default RegisterProductComponent;
