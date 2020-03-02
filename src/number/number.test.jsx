import React from 'react';
import { cleanup, configure, fireEvent, render } from '@testing-library/react';
import Number from './number';

test('testing number', () => {
    const { container, getByTestId } = render(<Number/>);
    console.log(container);
    expect(container.childNodes.length).toBe(1);
    expect(getByTestId('inputButton')).toBeInTheDocument();
    expect(getByTestId('inputButton').type).toBe('number');
    expect(getByTestId('inputLabel').textContent).toBe('Number');
});
