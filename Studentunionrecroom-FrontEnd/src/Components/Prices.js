import React, { Component } from 'react';
import Footer from './Footer';

function Prices(){ 

      return (
  
    <React.Fragment>
    
    <div className='radio'>
    <div class="grid-container">
  <div class="grid-item"><h1>BOWLING</h1></div>
  <div class="grid-item">
    <p> Univ Studetns $3.75</p>
    <p> Univ Affiliates $4.50</p>
    <p> General Public $5.25</p>
  </div>
  <div class="grid-item"><p>For Students and Affiliates only</p></div>
  <div class="grid-item"><h1>BILLIARDS</h1></div>
  <div class="grid-item">
    <p> Univ Studetns $3.75</p>
    <p> Univ Affiliates $4.50</p>
    <p> General Public $5.25</p>
  </div>
  <div class="grid-item"><p>For Students and Affiliates only</p></div>
  <div class="grid-item"><h1>DRINKS</h1></div>  
  <div class="grid-item">
    <p> Univ I Studetns $3.75</p>
    <p> Univ Affiliates $4.50</p>
    <p> General Public $5.25</p>
  </div>
  
    <div class="grid-item"><p>Pre tax</p></div>   
  
</div>
          </div>
        
          <Footer/>
      </React.Fragment>
      );
  }
  

  export default Prices
