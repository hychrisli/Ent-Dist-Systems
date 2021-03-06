import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

class App extends Component {
  render() {
    return (
      <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
        <Resource name="users" list={UserList}/>
      </Admin>
    );
  }
}

export default App;
