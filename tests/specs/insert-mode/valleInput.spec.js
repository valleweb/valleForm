import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ValleForm from '../../../src/ValleForm';
import valleInput01Data from '../../mocks/insert-mode/valle-input/valle-input-01.json';
import valleInput02Data from '../../mocks/insert-mode/valle-input/valle-input-02.json';
import valleInput03Data from '../../mocks/insert-mode/valle-input/valle-input-03.json';
import valleInput04Data from '../../mocks/insert-mode/valle-input/valle-input-04.json';

describe('Insert Mode: valle-input', () => {

  // =============== 
  // setup
  // =============== 

  let valleInput01,
      valleInput02,
      valleInput03,
      valleInput04;

  before(() => {
    const ValleFormWrapper01 = shallow(<ValleForm rows = { valleInput01Data.lines } />);
    valleInput01 = ValleFormWrapper01.find('valle-input');

    const ValleFormWrapper02 = shallow(<ValleForm rows = { valleInput02Data.lines } />);
    valleInput02 = ValleFormWrapper02.find('valle-input');

    const ValleFormWrapper03 = shallow(<ValleForm rows = { valleInput03Data.lines } />);
    valleInput03 = ValleFormWrapper03.find('valle-input');

    const ValleFormWrapper04 = shallow(<ValleForm rows = { valleInput04Data.lines } />);
    valleInput04 = ValleFormWrapper04.find('valle-input');
  });

  // ===============

  it('Should render a single valle-input', () => {
    expect(valleInput01).to.have.length(1);
    expect(valleInput01.type()).to.equal('valle-input');
    expect(valleInput02.type()).to.equal('valle-input');
  });

  // ===============

  it('Should render a valle-input with correct class', () => {
    expect(valleInput01.props().class).to.equal('valleForm__input');
  });

  // ===============

  it('Should render a valle-input with type', () => {
    expect(valleInput01.props().type).to.equal('text');
    expect(valleInput03.props().type).to.equal('number');
  });

  // ===============

  it('Should render a valle-input without type', () => {
    expect(valleInput02.props().type).to.equal('text');
  });

  // ===============

  it('Should render a valle-input with label', () => {
    expect(valleInput01.props().label).to.equal('First field');
  });

  // ===============

  it('Should render a valle-input without label', () => {
    expect(valleInput02.props().label).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with placeholder', () => {
    expect(valleInput01.props().placeholder).to.equal('Text here');
  });

  // ===============

  it('Should render a valle-input without placeholder', () => {
    expect(valleInput02.props().placeholder).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with helpertext', () => {
    expect(valleInput01.props().helpertext).to.equal('Full name');
  });

  // ===============

  it('Should render a valle-input without helpertext', () => {
    expect(valleInput02.props().helpertext).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with errortext', () => {
    expect(valleInput01.props().errortext).to.equal('Required field');
  });

  // ===============

  it('Should render a valle-input without errortext', () => {
    expect(valleInput02.props().errortext).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with correct data-valle-field', () => {
    expect(valleInput01.props()['data-valle-field']).to.equal('firstfield');
  });

  // ===============

  it('Should render a valle-input with maxlength', () => {
    expect(valleInput01.props().maxlength).to.equal(7);
  });

  // ===============

  it('Should render a valle-input without maxlength', () => {
    expect(valleInput02.props().maxlength).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with id (required)', () => {
    expect(valleInput01.props().id).to.equal('firstfield');
  });

  // ===============

  it('Should render a valle-input with pattern', () => {
    expect(valleInput01.props().pattern).to.equal('Olaaar');
  });

  // ===============

  it('Should render a valle-input without pattern', () => {
    expect(valleInput02.props().pattern).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with required', () => {
    expect(valleInput01.props().required).to.be.true;
  });

  // ===============

  it('Should render a valle-input without required', () => {
    expect(valleInput02.props().required).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with readonly', () => {
    expect(valleInput02.props().disabled).to.be.true;
  });

  // ===============

  it('Should render a valle-input without readonly', () => {
    expect(valleInput01.props().disabled).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with case', () => {
    expect(valleInput04.props().uppercase).to.be.true;
  });

  // ===============

  it('Should render a valle-input with especial case: capitalize (ProperCase)', () => {
    expect(valleInput01.props().capitalize).to.be.true;
  });

  // ===============

  it('Should render a valle-input without case', () => {
    expect(valleInput02.props().uppercase).to.be.undefined;
    expect(valleInput02.props().lowercase).to.be.undefined;
    expect(valleInput02.props().capitalize).to.be.undefined;
  });

  // ===============

  it('Should render a valle-input with mask', () => {
    expect(valleInput03.props().cpf).to.be.true;
  });

  // ===============

  it('Should render a valle-input without mask', () => {
    expect(valleInput02.props().cep).to.be.undefined;
    expect(valleInput02.props().cnpf).to.be.undefined;
    expect(valleInput02.props().cpf).to.be.undefined;
  });

  // ===============

});
