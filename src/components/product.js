import React from 'react'

var speaker =  {
    name: 'JBL Speaker',
    price: 6000.55,
    photo: 'imagesss/speaker.png',
    mdf: new Date()
  };
  class Category
  {
     CategoryName = 'Electronics'
  }
  class Product extends React.Component
  {
    product = speaker;
    render(){
       const category = new Category();
       return (
        <div className="card">
          <div className="card-header">
            <h3>{this.product.name}</h3>
          </div>
          <div className="card-body">
            <img src={this.product.photo} alt='speaker_photo' style={{border: '1px solid black'}} width="200" height="200" />
          </div>
          <div className="card-footer">
            <h3>{this.product.price}</h3>
            <p>{this.product.mdf.toLocaleDateString()}</p>
            <p>{category.CategoryName}</p>
          </div>
        </div>
       )
    }
  }
//   class MainContent extends React.Component
//   {
//     render(){
//       return (
//         <>
//         <Product />
//         </>
//       )
//     }
//   }
  
//   ReactDOM.render(
//     <MainContent />,
//     document.getElementById('root')
//   );
export default Product