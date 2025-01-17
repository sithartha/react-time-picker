import React from 'react';
import PropTypes from 'prop-types';
import { getHours } from '@wojtekmaj/date-utils';

import Input from './Input';

import { isRef, isTime } from '../shared/propTypes';
import { safeMin, safeMax } from '../shared/utils';

export default function Hour99Input({ hour, maxTime, minTime, ...otherProps }) {
  const maxHour = safeMin(99, maxTime && getHours(maxTime));
  const minHour = safeMax(0, minTime && getHours(minTime));

  return <Input max={maxHour} min={minHour} name="hour99" nameForClass="hour" {...otherProps} />;
}

Hour99Input.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  hour: PropTypes.string,
  inputRef: isRef,
  maxTime: isTime,
  minTime: isTime,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  showLeadingZeros: PropTypes.bool,
  value: PropTypes.string,
};
