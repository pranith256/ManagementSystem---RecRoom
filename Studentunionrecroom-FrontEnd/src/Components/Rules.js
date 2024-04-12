import React, { Component } from 'react';
import Footer from './Footer';
import { Card, Icon, Image } from 'semantic-ui-react'
import BB from '../pictures/BB.png';

function Rules(){ 

      return (
  
    <React.Fragment>
        
  <div className='radio'>
    
  <Card>
    <Card.Content>
      <Card.Header><b>RULE 1</b></Card.Header>
      <div className='desc'><Card.Description>
      Only 5 people allowed per lane
      </Card.Description></div>
     
    </Card.Content>
    <Card.Content>
      <Card.Header><b>RULE 2</b></Card.Header>
      <div className='desc'> <Card.Description>
      Please take care of your belongings
            </Card.Description></div>
     
    </Card.Content>
    <Card.Content>
      <Card.Header><b>RULE 3</b></Card.Header>
      <div className='desc'> <Card.Description>
      Get you own shoes
      </Card.Description></div>
     
    </Card.Content>
  </Card>

   
  
          </div>
        
 <Footer/>
          
      </React.Fragment>
      );
  }
  

  export default Rules
