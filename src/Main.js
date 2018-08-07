import React, { Component } from 'react';
import makeJsxRows from './makeJsxRows';

class ValleForm extends Component {

  render() {
    const $rows = makeJsxRows(this.props.rows);
    return <div> { $rows } </div>;
  }

}

export default ValleForm;
