import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create( 
  <ListItemWithIcon
    title="React" 
    iconStaticSource={require("../public/icons/react.png")}
  />).toJSON();
    expect(tree).toMatchSnapshot();
  );
});
