import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = ''}) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 40 }}
    >
      <Grid
        className='box-shadow'
        sx={{
          width: { md: 500 },
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
