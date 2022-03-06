import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './index';

const data = {
    "id": 11,
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://via.placeholder.com/300x300/09f/fff.png"
}

it('renders correctly when there is a single item', () => {
    const tree = renderer.create(<Modal {...data} />).toJSON();
    expect(tree).toMatchSnapshot();
});