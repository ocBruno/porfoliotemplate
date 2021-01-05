import React from 'react';
import renderer from 'react-test-renderer';
// https://github.com/expo/expo/labels/Requesting%20changes%20to%20issue
// awaiting expo jest fix
import App from '../App';

describe('<App />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
