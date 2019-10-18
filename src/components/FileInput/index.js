import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

export default function FileInput({ name }) {
  const { defaultValue, registerField, fieldName, error } = useField(name);

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current]);// eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <>
      <Container htmlFor={fieldName} hasPreview={!!preview}>
        {preview ? <img src={preview} alt="" /> : 'Selecionar Imagem'}

        <input
          type="file"
          id={fieldName}
          ref={ref}
          accept="image/*"
          onChange={handleChange}
          data-file={file}
        />
      </Container>
      {error && <span>{error}</span>}
    </>
  );
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
};
