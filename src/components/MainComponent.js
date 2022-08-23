import {React, Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContacteComponenet';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions'
import { LEADERS } from '../shared/leaders';
import {Routes, Route} from 'react-router-dom';


class Main extends Component {
  
  constructor(propos){
    super(propos);

    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      leaders : LEADERS,
      promotions : PROMOTIONS
    };
  }


  

  render(){

    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
      }
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                <Route exact path='/contactus' element={<Contact />}/>
                <Route path='*' element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </div>
    );}
}

export default Main;
