import { Appointment } from '../src/Appointment';
import React from 'react';
import { createRoot } from 'react-dom/client';

describe('Appointment', () => {
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        const root = createRoot(container);
        root.render(component);
        expect(document.body.textContent).toContain('Ashley');
    });
});