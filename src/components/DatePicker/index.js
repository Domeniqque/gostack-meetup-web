import { useField } from '@rocketseat/unform';
import ptBR from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

export default function DatePicker({ name, placeholder }) {
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue);
  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={date}
        locale={ptBR}
        dateFormat="dd/MM/yyyy HH:mm"
        timeIntervals={60}
        showTimeSelect
        timeCaption="Horário"
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={data => setDate(data)}
        placeholderText={placeholder}
        minDate={new Date()}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholder: '',
};
