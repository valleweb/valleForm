import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ValleForm from '../../src/ValleForm';
import SingleValleInput from '../mocks/insert-mode/single-valle-input.json';
import SingleValleSelect from '../mocks/insert-mode/single-valle-select.json';

describe('Insert mode', () => {

  // ==============================

  describe('valle-input', () => {

    // =============== 
    // setup
    // =============== 

    let valleInputSearch = null;

    beforeEach(() => {
      const wrapper = shallow(<ValleForm rows = { SingleValleInput.lines } />);
      valleInputSearch = wrapper.find('valle-input');
    });

    // ===============

    it('Should render a single valle-input', () => {
      expect(valleInputSearch).to.have.length(1);
    });

    // ===============

    it('Should render a valle-input with correct class', () => {
      expect(valleInputSearch.props().class).to.equal('valleForm__input');
    });

    // ===============

  });

});
