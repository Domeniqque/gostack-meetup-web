import React from 'react';
import { Switch } from 'react-router-dom';

import Meetups from '~/pages/Meetups';
import MeetupsCreate from '~/pages/Meetups/Create';
import MeetupsDetails from '~/pages/Meetups/Details';
import MeetupsEdit from '~/pages/Meetups/Edit';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Route from './Route';

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetups/create" component={MeetupsCreate} isPrivate />
      <Route path="/meetups/:id/edit" component={MeetupsEdit} isPrivate />
      <Route path="/meetups/:id" component={MeetupsDetails} isPrivate />
      <Route path="/meetups" component={Meetups} isPrivate />
    </Switch>
  );
}
