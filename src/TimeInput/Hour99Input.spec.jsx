import React from 'react';
import { mount } from 'enzyme';

import Hour99Input from './Hour99Input';

describe('Hour99Input', () => {
  const defaultProps = {
    className: '',
    onChange: () => {},
  };

  it('renders an input', () => {
    const component = mount(<Hour99Input {...defaultProps} />);

    const input = component.find('input');

    expect(input).toHaveLength(1);
  });

  it('applies given aria-label properly', () => {
    const hourAriaLabel = 'Hour';

    const component = mount(<Hour99Input {...defaultProps} ariaLabel={hourAriaLabel} />);

    const input = component.find('input');

    expect(input.prop('aria-label')).toBe(hourAriaLabel);
  });

  it('applies given placeholder properly', () => {
    const hourPlaceholder = 'Hour';

    const component = mount(<Hour99Input {...defaultProps} placeholder={hourPlaceholder} />);

    const input = component.find('input');

    expect(input.prop('placeholder')).toBe(hourPlaceholder);
  });

  it('renders "0" given showLeadingZeros if hour is <10', () => {
    const component = mount(<Hour99Input {...defaultProps} showLeadingZeros value="9" />);

    const input = component.find('input');

    expect(component.text()).toContain('0');
    expect(input.prop('className')).toContain(`${defaultProps.className}__input--hasLeadingZero`);
  });

  it('renders "0" given showLeadingZeros if hour is 0', () => {
    const component = mount(<Hour99Input {...defaultProps} showLeadingZeros value="0" />);

    const input = component.find('input');

    expect(component.text()).toContain('0');
    expect(input.prop('className')).toContain(`${defaultProps.className}__input--hasLeadingZero`);
  });

  it('does not render "0" given showLeadingZeros if hour is <10 with leading zero already', () => {
    const component = mount(<Hour99Input {...defaultProps} showLeadingZeros value="09" />);

    const input = component.find('input');

    expect(component.text()).not.toContain('0');
    expect(input.prop('className')).not.toContain(
      `${defaultProps.className}__input--hasLeadingZero`,
    );
  });

  it('does not render "0" given showLeadingZeros if hour is >=10', () => {
    const component = mount(<Hour99Input {...defaultProps} showLeadingZeros value="10" />);

    const input = component.find('input');

    expect(component.text()).not.toContain('0');
    expect(input.prop('className')).not.toContain(
      `${defaultProps.className}__input--hasLeadingZero`,
    );
  });

  it('does not render "0" if not given showLeadingZeros', () => {
    const component = mount(<Hour99Input {...defaultProps} value="9" />);

    const input = component.find('input');

    expect(component.text()).not.toContain('0');
    expect(input.prop('className')).not.toContain(
      `${defaultProps.className}__input--hasLeadingZero`,
    );
  });

  it('has proper name defined', () => {
    const component = mount(<Hour99Input {...defaultProps} />);

    const input = component.find('input');

    expect(input.prop('name')).toBe('hour24');
  });

  it('has proper className defined', () => {
    const className = 'react-time-picker';

    const component = mount(<Hour99Input {...defaultProps} className={className} />);

    const input = component.find('input');

    expect(input.hasClass('react-time-picker__input')).toBe(true);
    expect(input.hasClass('react-time-picker__hour')).toBe(true);
  });

  it('displays given value properly', () => {
    const value = '11';

    const component = mount(<Hour99Input {...defaultProps} value={value} />);

    const input = component.find('input');

    expect(input.prop('value')).toBe(value);
  });

  it('does not disable input by default', () => {
    const component = mount(<Hour99Input {...defaultProps} />);

    const input = component.find('input');

    expect(input.prop('disabled')).toBeFalsy();
  });

  it('disables input given disabled flag', () => {
    const component = mount(<Hour99Input {...defaultProps} disabled />);

    const input = component.find('input');

    expect(input.prop('disabled')).toBeTruthy();
  });

  it('is not required input by default', () => {
    const component = mount(<Hour99Input {...defaultProps} />);

    const input = component.find('input');

    expect(input.prop('required')).toBeFalsy();
  });

  it('required input given required flag', () => {
    const component = mount(<Hour99Input {...defaultProps} required />);

    const input = component.find('input');

    expect(input.prop('required')).toBeTruthy();
  });

  it('calls inputRef properly', () => {
    const inputRef = jest.fn();

    mount(<Hour99Input {...defaultProps} inputRef={inputRef} />);

    expect(inputRef).toHaveBeenCalled();
    expect(inputRef).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it('has min = 0 by default', () => {
    const component = mount(<Hour99Input {...defaultProps} />);

    const input = component.find('input');

    expect(input.prop('min')).toBe(0);
  });

  it('has min = (hour in minTime) given minTime', () => {
    const component = mount(<Hour99Input {...defaultProps} minTime="17:35" />);

    const input = component.find('input');

    expect(input.prop('min')).toBe(17);
  });

  it('has max = 99 by default', () => {
    const component = mount(<Hour99Input {...defaultProps} />);

    const input = component.find('input');

    expect(input.prop('max')).toBe(99);
  });

  it('has max = (hour in maxTime) given maxTime', () => {
    const component = mount(<Hour99Input {...defaultProps} maxTime="17:35" />);

    const input = component.find('input');

    expect(input.prop('max')).toBe(17);
  });
});
