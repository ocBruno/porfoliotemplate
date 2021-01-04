import React from 'react';
import renderer from 'react-test-renderer';
import {InfoCard} from './InfoCard';

test('renders correctly', () => {
  const tree = renderer.create(
    <InfoCard
        topbarTitle="Contact"
        header="Open to new opportunities!"
        subHeader="Get in contact:"
      >).toJSON();
  expect(tree).toMatchSnapshot();
});