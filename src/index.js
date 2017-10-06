import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Cell } from 'react-inline-grid';

class Layout extends React.Component{
  render() {
    return (
      <Grid>
        <Row is="center">
          <Cell is="desktop-6"><div>content_a</div></Cell>
          <Cell is="desktop-6"><div>content_b</div></Cell>
        </Row>
      </Grid>
    );
  }
};
 
ReactDOM.render(
	<Layout />, 
	document.getElementById('root')
);
