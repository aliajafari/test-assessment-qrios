import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './index';
import ReactDOM from 'react-dom'
import { render, fireEvent, screen } from '@testing-library/react'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'portal-root')
document.body.appendChild(modalRoot)

const data = {
    "id": 11,
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "https://via.placeholder.com/300x300/09f/fff.png"
}

describe('Modal =>', () => {
    test('renders correctly when there is a Modal', () => {
        const tree = renderer.create(<Modal {...data} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('modal shows and a close button', () => {
        const handleClose = jest.fn()
        render(<Modal {...data} onClickClose={handleClose} />)
        expect(screen.getByTestId('modal-container')).toBeTruthy()
        fireEvent.click(screen.getByTestId('close-modal'))
        expect(handleClose).toHaveBeenCalledTimes(1)
    })


    test('Modal shows with data', () => {
        const handleClose = jest.fn()
        render(<Modal {...data} onClickClose={handleClose} />)
        expect(screen.getByTestId('modal-title')).toHaveTextContent(data.title)
        expect(screen.getByTestId('modal-image')).toHaveAttribute('src', data.image)
        expect(screen.getByTestId('modal-description')).toHaveTextContent(data.description)
    })
})