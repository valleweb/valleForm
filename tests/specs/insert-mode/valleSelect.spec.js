import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ValleForm from '../../../src/ValleForm';
import valleSelect01Data from '../../mocks/insert-mode/valle-select/valle-select-01.json';
import valleSelect02Data from '../../mocks/insert-mode/valle-select/valle-select-02.json';
import valleSelect03Data from '../../mocks/insert-mode/valle-select/valle-select-03.json';
import valleSelect04Data from '../../mocks/insert-mode/valle-select/valle-select-04.json';

describe('Insert Mode: valle-select', () => {

  // =============== 
  // setup
  // =============== 

  let valleSelect01,
      valleSelect02,
      valleSelect03,
      valleSelect04;

  before(() => {
    const ValleFormWrapper04 = shallow(<ValleForm rows = { valleSelect04Data.lines } />);
    valleSelect04 = ValleFormWrapper04.find('valle-select');

    const ValleFormWrapper01 = shallow(<ValleForm rows = { valleSelect01Data.lines } />);
    valleSelect01 = ValleFormWrapper01.find('valle-select');

    const ValleFormWrapper02 = shallow(<ValleForm rows = { valleSelect02Data.lines } />);
    valleSelect02 = ValleFormWrapper02.find('valle-select');

    const ValleFormWrapper03 = shallow(<ValleForm rows = { valleSelect03Data.lines } />);
    valleSelect03 = ValleFormWrapper03.find('valle-select');
  });

  // ===============

  it('Should render a single valle-select', () => {
    expect(valleSelect01).to.have.length(1);
    expect(valleSelect01.type()).to.equal('valle-select');
    expect(valleSelect01.props().children).to.have.length(1);
    expect(valleSelect01.props().children[0].type).to.equal('valle-option');
  });

  // ===============

  it('Should render a valle-select with correct class', () => {
    expect(valleSelect04.props().class).to.equal('valleForm__select ');
  });

  // ===============

  it('Should render a valle-select with correct class (single element in row)', () => {
    expect(valleSelect01.props().class).to.equal('valleForm__select valleForm__select--big');
  });

  // ===============

  it('Should render a valle-select with label', () => {
    expect(valleSelect01.props().label).to.equal('First Select');
  });

  // ===============

  it('Should render a valle-select without label', () => {
    expect(valleSelect02.props().label).to.be.undefined;
  });

  // ===============

  it('Should render a valle-select with correct data-valle-field', () => {
    expect(valleSelect01.props()['data-valle-field']).to.equal('firstSelect');
  });

  // ===============

  it('Should render a valle-select with placeholder', () => {
    expect(valleSelect01.props().placeholder).to.equal('You options');
  });

  // ===============

  it('Should render a valle-select without placeholder', () => {
    expect(valleSelect02.props().placeholder).to.be.undefined;
  });

  // ===============

  it('Should render a valle-select with helpertext', () => {
    expect(valleSelect01.props().helpertext).to.equal('All options available');
  });

  // ===============

  it('Should render a valle-select without helpertext', () => {
    expect(valleSelect02.props().helpertext).to.be.undefined;
  });

  // ===============

  it('Should render a valle-select with errortext', () => {
    expect(valleSelect01.props().errortext).to.equal('Required field');
  });

  // ===============

  it('Should render a valle-select without errortext', () => {
    expect(valleSelect02.props().errortext).to.be.undefined;
  });

  // ===============

  it('Should render a valle-select with id (required)', () => {
    expect(valleSelect01.props().id).to.equal('firstSelect');
  });

  // ===============

  it('Should render a valle-select with required', () => {
    expect(valleSelect01.props().required).to.be.true;
  });

  // ===============

  it('Should render a valle-select without required', () => {
    expect(valleSelect02.props().required).to.be.undefined;
  });

  // ===============

  it('Should render a valle-select with readonly', () => {
    expect(valleSelect02.props().disabled).to.be.true;
  });

  // ===============

  it('Should render a valle-select without readonly', () => {
    expect(valleSelect01.props().disabled).to.be.undefined;
  });

  // ===============

  it('Should render a valle-select with single valle-option', () => {
    expect(valleSelect01.props().children).to.have.length(1);
    expect(valleSelect01.props().children[0].type).to.equal('valle-option');
  });

  // ===============

  it('Should render a valle-select with single valle-option and correct value', () => {
    const valleOption01 = valleSelect01.props().children[0];
    expect(valleOption01.props.value).to.equal('example1');
  });

  // ===============

  it('Should render a valle-select with single valle-option and correct text', () => {
    const valleOption01 = valleSelect01.props().children[0];
    expect(valleOption01.props.children).to.equal('Example 1');
  });

  // ===============

  it('Should render a valle-select with multiple valle-option', () => {
    expect(valleSelect03.props().children).to.have.length(3);
    expect(valleSelect03.props().children[0].type).to.equal('valle-option');
    expect(valleSelect03.props().children[1].type).to.equal('valle-option');
    expect(valleSelect03.props().children[2].type).to.equal('valle-option');
  });

  // ===============

});
