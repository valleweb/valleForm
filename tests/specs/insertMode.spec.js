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

    let simpleValleInput = null;

    beforeEach(() => {
      const ValleFormWrapper = shallow(<ValleForm rows = { SingleValleInput.lines } />);
      simpleValleInput = ValleFormWrapper.find('valle-input');
    });

    // ===============

    it('Should render a single valle-input', () => {
      expect(simpleValleInput).to.have.length(1);
      expect(simpleValleInput.type()).to.equal('valle-input');
    });

    // ===============

    it('Should render a valle-input with correct class', () => {
      expect(simpleValleInput.props().class).to.equal('valleForm__input');
    });

    // ===============

    it('Should render a valle-input with correct type', () => {
      expect(simpleValleInput.props().type).to.equal('text');
    });

    // ===============

    it('Should render a valle-input with correct label', () => {
      expect(simpleValleInput.props().label).to.equal('First field');
    });

    // ===============

    it('Should render a valle-input with correct placeholder', () => {
      expect(simpleValleInput.props().placeholder).to.equal('Text here');
    });

    // ===============

    it('Should render a valle-input with correct helpertext', () => {
      expect(simpleValleInput.props().helpertext).to.equal('Full name');
    });

    // ===============

    it('Should render a valle-input with correct errortext', () => {
      expect(simpleValleInput.props().errortext).to.equal('Required field');
    });

    // ===============

    it('Should render a valle-input with correct data-valle-field', () => {
      expect(simpleValleInput.props()['data-valle-field']).to.equal('firstfield');
    });

    // ===============

    it('Should render a valle-input with correct maxlength', () => {
      expect(simpleValleInput.props().maxlength).to.equal(7);
    });

    // ===============

    it('Should render a valle-input with correct id', () => {
      expect(simpleValleInput.props().id).to.equal('firstfield');
    });

    // ===============

    it('Should render a valle-input with correct pattern', () => {
      expect(simpleValleInput.props().pattern).to.equal(null);
    });

    // ===============

    it('Should render a valle-input with correct required', () => {
      expect(simpleValleInput.props().required).to.be.true;
    });

    // ===============

    it('Should render a valle-input with correct readonly', () => {
      expect(simpleValleInput.props().readonly).to.be.undefined;
    });

    // ===============

    it('Should render a valle-input with correct case', () => {
      expect(simpleValleInput.props().capitalize).to.be.true;
    });

    // ===============

    it('Should render a valle-input with correct mask', () => {
      expect(simpleValleInput.props().mask).to.be.undefined;
    });

    // ===============

  });

});
