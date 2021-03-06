import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import {useEffect, useState} from 'react';
import AuthLayout from '../layouts/AuthLayout';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, errors, watch} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const value =
      Object.keys(errors).length > 0 || !watch('email') || !watch('password');
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
            SIGN IN
          </Typography>
          <Typography align="center" component="p" variant="overline">
            Hi, Welcome again!
          </Typography>
        </Box>
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
              {loading ? 'loading..' : 'Sign In'}
            </Button>
          </Box>

          <Divider variant="middle" />
          <Box mt={3}>
            <Typography align="center" variant="overline" component="h4">
              Do you need help?
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Link href="/sign-up">
                  <Button
                    component="a"
                    variant="outlined"
                    fullWidth
                    size="large">
                    Don't have an account
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button component="a" variant="outlined" fullWidth size="large">
                  Forget my passowrd
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </AuthLayout>
  );
}
