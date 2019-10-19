import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, Loader } from './styles';

export default function FileInput({ name, dataName }) {
  const { registerField, fieldName, error, defaultValue } = useField(
    dataName || name
  );
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [progress, setProgress] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current, name]);// eslint-disable-line

  async function handleChange(e) {
    function onUploadProgress(progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );

      setProgress(percentCompleted);
    }

    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('/files', data, { onUploadProgress });
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
        <Loader progress={progress} />
      </Container>
      {error && <span>{error}</span>}
    </>
  );
}

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  dataName: PropTypes.string,
  defaultValue: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
  }),
};

FileInput.defaultProps = {
  defaultValue: null,
  dataName: null,
};
