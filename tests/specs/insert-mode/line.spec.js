import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ValleForm from '../../../src/ValleForm';
import singleLine01Data from '../../mocks/insert-mode/lines/single-line-01.json';
import singleLine02Data from '../../mocks/insert-mode/lines/single-line-02.json';
import singleLine03Data from '../../mocks/insert-mode/lines/single-line-03.json';

describe('Insert Mode: Line (multiple fields)', () => {

  // =============== 
  // setup
  // =============== 

  let singleLine01,
      singleLine02,
      singleLine03,
      singleLine04,
      singleLine05;

  before(() => {
    const ValleFormWrapper01 = shallow(<ValleForm rows = { singleLine01Data.lines } />);
    singleLine01 = ValleFormWrapper01.find('.valleForm__row');

    const ValleFormWrapper02 = shallow(<ValleForm rows = { singleLine02Data.lines } />);
    singleLine02 = ValleFormWrapper02.find('.valleForm__row');

    const ValleFormWrapper03 = shallow(<ValleForm rows = { singleLine02Data.lines } filtered />);
    singleLine03 = ValleFormWrapper03.find('.valleForm__row');

    const ValleFormWrapper04 = shallow(<ValleForm rows = { singleLine03Data.lines } />);
    singleLine04 = ValleFormWrapper04.find('.valleForm__row');

    const ValleFormWrapper05 = shallow(<ValleForm rows = { singleLine03Data.lines } filtered />);
    singleLine05 = ValleFormWrapper05.find('.valleForm__row');
  });

  // ===============

  it('Should render a single line', () => {
    expect(singleLine01).to.have.length(1);
  });

  // ===============

  it('Should render a single line with multiple fields', () => {
    expect(singleLine01.props().children).to.have.length(3);
    expect(singleLine01.props().children[0].type).to.equal('valle-input');
    expect(singleLine01.props().children[1].type).to.equal('valle-input');
    expect(singleLine01.props().children[2].type).to.equal('valle-select');
  });
  
  // ===============

  it('Should render a single filtered line (visible_screen:false in one field) with multiple fields', () => {
    expect(singleLine02.props().children).to.have.length(3);
    expect(singleLine02.props().children[0].props.id).to.equal('field1');
    expect(singleLine02.props().children[1].props.id).to.equal('field2');
    expect(singleLine02.props().children[2].props.id).to.equal('field3');
  });

  // ===============

  it('Should render a single filtered line (visible_screen:false in one field) with multiple fields (with filtered prop)', () => {
    expect(singleLine03.props().children).to.have.length(2);
    expect(singleLine03.props().children[0].props.id).to.equal('field1');
    expect(singleLine03.props().children[1].props.id).to.equal('field3');
  });

  // ===============

  it('Should render a single filtered line (visible_screen:false in multiple fields) with multiple fields', () => {
    expect(singleLine04.props().children).to.have.length(5);
    expect(singleLine04.props().children[0].props.id).to.equal('field1');
    expect(singleLine04.props().children[1].props.id).to.equal('field2');
    expect(singleLine04.props().children[2].props.id).to.equal('field3');
    expect(singleLine04.props().children[3].props.id).to.equal('field4');
    expect(singleLine04.props().children[4].props.id).to.equal('field5');
  });

  // ===============

  it('Should render a single filtered line (visible_screen:false in multiple fields) with multiple fields (with filtered prop)', () => {
    expect(singleLine05.props().children).to.have.length(2);
    expect(singleLine05.props().children[0].props.id).to.equal('field2');
    expect(singleLine05.props().children[1].props.id).to.equal('field4');
  });

  // ===============
});
