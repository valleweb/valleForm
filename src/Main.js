import React, { Component } from 'react';
import axios from 'axios';
import makeJsxRows from './makeJsxRows';

class valleForm extends Component {

  constructor() {
    super();
    this.state = {
      $rows: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/data')
      .then(res => {
        const firstTabRows = res.data[0].fields;
        this.setState({ $rows: makeJsxRows(firstTabRows) });
      });
  }

  render() {
    return <div> { this.state.$rows } </div>;
  }

}

export default valleForm;