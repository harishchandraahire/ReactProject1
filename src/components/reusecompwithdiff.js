import React from 'react'

class Header extends React.Component
{
  render(){
    return (
      <header className="bg-danger text-white text-center">
        {/* <h1>Amazon Shopping</h1> */}
      </header>
    )
  }
}
class MenuContent extends React.Component
{
  render() {
    return (
      <nav>
        <ul>
          <li><span className="fa fa-home"></span> Home</li>
          <li><span className="fa fa-tv"></span> Electronics</li>
          <li><span className="fa fa-bell"></span> Fashion</li>
        </ul>
      </nav>
    )
  }
}
class Product extends React.Component
{ 
  render() {
    return (
        <div className="card">
           <div className="card-header text-center">
               <h3>{this.props.Name}</h3>
           </div>
           <div className="card-body text-center">
               <img src={this.props.Photo} width="200" height="200"></img>
           </div>
           <div className="card-footer text-center">
               <h4>{this.props.Price}</h4>
           </div>
        </div>
      )
   }
 }
 class Products extends React.Component
 {
    render(){
      return (
        <div className="card-deck">
          <Product Name={'Nike Casuals'} Price={5600.66} Photo={'/imagesss/shoe.png'} />
          <Product Name={'Lee Boot'} Price={4000.55} Photo={'/imagesss/shoe1.jpg'} />
          <Product Name={'JBL Speaker'} Price={5000.55} Photo={'/imagesss/speaker.png'} />
        </div>
      )
    }
 }
 class Reusecompwithdiffargu extends React.Component
 {
   render(){
     return (
       <>
        <Header />
        <section>
         <div className="row">
          <div className="col-3">
             <MenuContent />
          </div>
          <div className="col-9">
             <Products />
          </div>
          </div>
        </section>
        <footer className="text-center">
          &copy; Copyright 2021; 
        </footer>
       </>
     )
   }
 }
// ReactDOM.render(
//   <MainContent />,
//   document.getElementById('root')
// );

export default Reusecompwithdiffargu