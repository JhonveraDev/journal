import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <form>
        <Grid container direction="column">
          <Grid sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email@google.com"
              fullWidth
            />
          </Grid>

          <Grid sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{
              mt: 2,
              mb: 2,
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
            }}
          >
            <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 6' } }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
