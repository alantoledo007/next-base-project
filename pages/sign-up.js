import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core';
import {useEffect, useState} from 'react';
import AuthLayout from '../layouts/AuthLayout';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import getConfig from 'next/config';
import Link from 'next/link';
import MaterialLink from '@material-ui/core/Link';

const {
  publicRuntimeConfig: {app_name},
} = getConfig();

const schema = yup.object().shape({
  fullname: yup.string().required().min(4),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
  agreement: yup.bool().oneOf([true], 'Please accept to continue'),
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
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
    <AuthLayout>
      <Container>
        <Box mb={2}>
          <Typography align="center" component="h1" variant="h5">
            CREATE AN ACCOUNT
          </Typography>
          <Typography align="center" component="p" variant="overline">
            Welcome to {app_name}
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Box mb={3}>
            <TextField
              name="fullname"
              error={!!errors.fullname?.type}
              inputRef={register}
              label="Fullname"
              variant="outlined"
              fullWidth
              helperText={errors.fullname?.message}
              type="text"
            />
          </Box>

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
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              error={!!errors.password?.type}
              helperText={errors.password?.message}
              inputRef={register}
              type={showPassword ? 'text' : 'password'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
              }
              label="Show password"
            />
          </Box>
          <Box mb={3}>
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              disabled={disabledSubmit || loading}
              color="primary">
              {loading ? 'loading..' : 'Sign Up'}
            </Button>
            <Box display="flex" justifyContent="center">
              <FormControl error={true}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      size="small"
                      name="agreement"
                      inputRef={register}
                    />
                  }
                  label={
                    <>
                      I accept the{' '}
                      <MaterialLink href="/">terms and conditions</MaterialLink>{' '}
                      {'&'}{' '}
                      <MaterialLink href="/">privacy policies</MaterialLink>
                    </>
                  }
                />
                {errors.agreement?.message && (
                  <FormHelperText>{errors.agreement.message}</FormHelperText>
                )}
              </FormControl>
            </Box>
          </Box>

          <Divider variant="middle" />
          <Box mt={3}>
            <Typography align="center" variant="overline" component="h4">
              Do you need help?
            </Typography>
            <Link href="/sign-in">
              <Button component="a" variant="outlined" fullWidth size="large">
                Already have an account
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </AuthLayout>
  );
}
