import React from 'react';
import { List, ListItem } from '@material-ui/core';

function Links() {
return (
  <div>
    <List>
      <ListItem><a href="http://twitter.com/ChuckLeone" target="_new">twitter</a></ListItem>
      <ListItem><a href="http://instagram.com/ChuckLeone" target="_new">instagram</a></ListItem>
      <ListItem><a href="http://github.com/ChuckLeone" target="_new">GitHub</a></ListItem>
      <ListItem><a href="mailto: chuckleone@gmail.com">email</a></ListItem>
    </List>
  </div>
)
};

export default Links;