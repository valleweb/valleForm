import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ValleForm from '../../../src/ValleForm';
import multiplesLines01Data from '../../mocks/insert-mode/multiple-lines/multiple-lines-01.json';
import multiplesLines02Data from '../../mocks/insert-mode/multiple-lines/multiple-lines-02.json';

describe('Insert Mode: Lines (multiple lines)', () => {

  // =============== 
  // setup
  // =============== 

  let multipleLines01,
      multipleLines02,
      multipleLines03;

  before(() => {
    const ValleFormWrapper01 = shallow(<ValleForm rows = { multiplesLines01Data.lines } />);
    multipleLines01 = ValleFormWrapper01.find('.valleForm__row');

    const ValleFormWrapper02 = shallow(<ValleForm rows = { multiplesLines02Data.lines } />);
    multipleLines02 = ValleFormWrapper02.find('.valleForm__row');

    const ValleFormWrapper03 = shallow(<ValleForm rows = { multiplesLines02Data.lines } filtered />);
    multipleLines03 = ValleFormWrapper03.find('.valleForm__row');
  });

  // ===============

  it('Should render multiples lines', () => {
    expect(multipleLines01).to.have.length(3);
  });

  // ===============

  it('Should render multiples filtered lines (visible_screen:false in multiple fields)', () => {

    // First line fileds
    expect(multipleLines02.nodes[0].props.children).to.have.length(3);
    expect(multipleLines02.nodes[0].props.children[0].props.id).to.equal('field1_1');
    expect(multipleLines02.nodes[0].props.children[1].props.id).to.equal('field1_2');
    expect(multipleLines02.nodes[0].props.children[2].props.id).to.equal('field1_3');

    // Second line fileds
    expect(multipleLines02.nodes[0].props.children).to.have.length(3);
    expect(multipleLines02.nodes[1].props.children[0].props.id).to.equal('field2_1');
    expect(multipleLines02.nodes[1].props.children[1].props.id).to.equal('field2_2');
    expect(multipleLines02.nodes[1].props.children[2].props.id).to.equal('field2_3');

    // Third line fileds
    expect(multipleLines02.nodes[0].props.children).to.have.length(3);
    expect(multipleLines02.nodes[2].props.children[0].props.id).to.equal('field3_1');
    expect(multipleLines02.nodes[2].props.children[1].props.id).to.equal('field3_2');
    expect(multipleLines02.nodes[2].props.children[2].props.id).to.equal('field3_3');

  });

  // ===============

  it('Should render multiples filtered lines (visible_screen:false in multiple fields and filtered prop)', () => {

    // First line fileds
    expect(multipleLines03.nodes[0].props.children).to.have.length(2);
    expect(multipleLines03.nodes[0].props.children[0].props.id).to.equal('field1_2');
    expect(multipleLines03.nodes[0].props.children[1].props.id).to.equal('field1_3');

    // Second line fileds
    expect(multipleLines03.nodes[0].props.children).to.have.length(1);
    expect(multipleLines03.nodes[1].props.children[0].props.id).to.equal('field2_1');

    // Third line fileds
    expect(multipleLines03.nodes[0].props.children).to.have.length(2);
    expect(multipleLines03.nodes[2].props.children[0].props.id).to.equal('field3_1');
    expect(multipleLines03.nodes[2].props.children[1].props.id).to.equal('field3_2');

  });

  // ===============

});
