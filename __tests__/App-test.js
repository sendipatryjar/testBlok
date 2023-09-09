/**
 * @format
 */

import React from 'react';
import Home from '../src/screens/HomeScreen';
import Detail from '../src/screens/DetailScreen';
import Type from '../src/screens/TypeScreen';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Home', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Detail', () => {
  const tree = renderer.create(<Detail />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Type', () => {
  const tree = renderer.create(<Type />).toJSON();
  expect(tree).toMatchSnapshot();
});