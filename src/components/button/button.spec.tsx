import React from 'react';
import renderer from 'react-test-renderer';

import {Button, PropsType} from './button';

let props: PropsType;

beforeEach(() => {
    props = {
        children: 'child',
        width: 'small',
    }
})

describe('<Button />', () => {
    it('should render correctly', () => {
        const tree = renderer.create(<Button> children </Button>);
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if prop href exist', () => {
        props.href = 'link';
        const tree = renderer.create(<Button {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if width medium', () => {
        props.width = 'medium';
        const tree = renderer.create(<Button {...props} />);
        expect(tree).toMatchSnapshot();
    });

    it('should render correctly if width long', () => {
        props.width = 'long';
        const tree = renderer.create(<Button {...props} />);
        expect(tree).toMatchSnapshot();
    });
});