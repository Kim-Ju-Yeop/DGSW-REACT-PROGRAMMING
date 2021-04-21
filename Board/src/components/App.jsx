import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from 'components/SignUp';
import Members from './Members';
import PostForm from './PostForm';
import UserPostList from './UserPostList';
import UserSearch from './UserSearch/UserSearch';
import AllPost from './AllPost/AllPost';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/members' component={Members} />
        <Route exact path='/post-form' component={PostForm} />
        <Route exact path='/user-post' component={UserPostList} />
        <Route exact path='/user-search' component={UserSearch} />
        <Route exact path='/all-post' component={AllPost} />
      </Switch>
    </Router>
  );
}

export default App;