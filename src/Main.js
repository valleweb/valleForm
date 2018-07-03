import React, { Component } from 'react';
import axios from 'axios';
import makeJsxRows from './makeJsxRows';

class ValleForm extends Component {

  constructor() {
    super();
    this.state = {
      $rows: [],
    };
  }

  componentDidMount() {
    axios
      .get(this.props.api)
      .then(res => {
        const firstTabRows = res.data[0].fields;
        this.setState({ $rows: makeJsxRows(firstTabRows) });
      });
  }

  render() {
    return <div> { this.state.$rows } </div>;
  }

}

export default ValleForm;
