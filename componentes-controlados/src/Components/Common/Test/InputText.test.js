import React from 'react';
import InputText from '../../../components/common';
import { shallow } from 'enzyme';

describe('Input text component', () => {

    test ('deve possuir um input', () => {
        const component = shallow(<InputText />);
        expect(component.find('input').length).toBe(1);
    });

});