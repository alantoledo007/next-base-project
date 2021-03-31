import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Button, TextField} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  content: yup.string().required().min(30),
});

export default function ContactForm(props) {
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, errors, watch} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const value = Object.keys(errors).length > 0;
    if (value !== disabledSubmit) setDisabledSubmit(value);
  }, [errors, watch]);

  const onSubmit = (data) => {
    //submit your data..
    setLoading(true);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box mb={3}>
        <TextField
          name="email"
          error={!!errors.email?.type}
          inputRef={register}
          label="E-Mail address"
          variant="outlined"
          fullWidth
          helperText={errors.email?.message}
          type="text"
        />
      </Box>

      <Box mb={3}>
        <TextField
          name="content"
          error={!!errors.content?.type}
          inputRef={register}
          label="Your message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          helperText={errors.content?.message}
        />
      </Box>

      <Box>
        <Button
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          disabled={disabledSubmit || loading}
          color="primary">
          {loading ? 'loading..' : 'Sign In'}
        </Button>
      </Box>
    </Box>
  );
}
