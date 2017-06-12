import React from 'react';
import {render, reactDom} from 'react-dom';
import {IconButton, Menu, MenuItem} from 'react-mdl';
import AwesomeComponent from './AwesomeComponent.jsx';
import MyTable from './table.jsx';
import TableElement from './table/table.jsx';

class App extends React.Component {
  render () {
   return (
      <div>
        <p> Hello les réactantssss !</p>
        <AwesomeComponent />
        <div style={{position: 'relative'}}>
            <IconButton name="more_vert" id="demo-menu-lower-left" />
            <Menu target="demo-menu-lower-left">
                <MenuItem>Some Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem disabled>Disabled Action</MenuItem>
                <MenuItem>Yet Another Action</MenuItem>
            </Menu>
        </div>

        <TableElement />

      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
