import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container direction="column">
          <Grid item sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              fullWidth
            />
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email@google.com"
              fullWidth
            />
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login" sx={{ mr: 2 }}>
              Do you already have an account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
