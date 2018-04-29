import React from "react";

import Header from "./Header";
import Footer from "./Footer";

class Root extends React.Component {
   render() {
       return (
           <div className="container">
               <div className="row">
                   <div className="col-xs-10 col-xs-offset-1">
                       <Header />
                   </div>
               </div>
               <hr/>
               <div className="row">
                   <div className="col-xs-10 col-xs-offset-1">
                      <h3> These are Root.children: </h3>
                       {this.props.children}
                   </div>
               </div>
               <hr/>
               <div className="row">
                   <div className="col-xs-10 col-xs-offset-1">
                       <Footer />
                   </div>
               </div>
           </div>
       );
   }
}
export default Root;
