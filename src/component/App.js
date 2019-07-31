import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Clock from './Clock/Clock';
import Login from './Login';
import Register from './Register';
import PageNotFound from "./PageNotFound";
import Profile from './Profile/Profile';
import Article from './Articles/Article';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticleDetails from "./Articles/ArticleDetails";
import Team from "./Team";
import PrivateRoute from './PrivateRoute'
import AddArticle from "./Articles/AddArticle";
import UserProfile from "./Profile/UserProfile";
import Logout from "./Logout";

class App extends React.Component {
    render() {
        return (
            <div className='con'>
                <Navigation />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/clock" render={() => {
                            return <Clock />
                        }} />
                        <Route path="/articles" render={() => {
                            return <Article />
                        }} />
                        <Route path="/article/:id" render={(history, match) => {
                            return <ArticleDetails history={history} match={match} />
                        }} />
                        <PrivateRoute  path="/profile" render={(history, match) => {
                            return <Profile history={history} match={match} />
                        }} />
                        <Route path="/userProfile/:id" render={() => {
                            return <UserProfile />
                        }} />
                        <Route path="/cpMatch" render={() => {
                            return <Team />
                        }} />
                        <Route path="/addArticle" render={() => {
                            return <AddArticle />
                        }} />
                        <Route path="/login" render={() => {
                            return <Login />
                        }} />
                        <Route path="/register" render={() => {
                            return <Register />
                        }} />
                        <Route path="/logout" render={() => {
                            return <Logout/>
                        }} />
                        <Route component={PageNotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
