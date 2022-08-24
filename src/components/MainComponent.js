import {React, Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContacteComponenet';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions'
import { LEADERS } from '../shared/leaders';
import {Routes, Route, useParams} from 'react-router-dom';


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

    const DishWithID = () =>{
       //  get ID from url
      const params = useParams();
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))} />
        );
    }
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route exact path='/menu' element={<Menu dishes={this.state.dishes} />} />
                <Route path='/menu/:dishId' element={<DishWithID />}/>
                <Route exact path='/contactus' element={<Contact />}/>
                <Route path='/aboutus' element={<About leaders={this.state.leaders}/>}/>
                <Route path='*' element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </div>
    );}
}

export default Main;
