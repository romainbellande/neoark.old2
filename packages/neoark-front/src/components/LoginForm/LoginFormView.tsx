import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

import useStyles from './LoginForm.styles';
import Credentials from './credentials.interface';

const errorHandler = <T extends {}>(formik: { errors: FormikErrors<T>; submitCount: number }) => (
  field: keyof T,
): boolean => !!formik.errors[field] && formik.submitCount > 0;

interface Props {
  onSubmit(values: Credentials): void;
  validationSchema: Yup.ObjectSchema;
  initialValues: Credentials;
}

const EquipmentFormView = ({ onSubmit, validationSchema, initialValues }: Props) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const getFieldError = errorHandler(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
                error={getFieldError('email')}
                required
                fullWidth
              />
              <FormHelperText error>{formik.errors.email}</FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <Input
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
                error={getFieldError('password')}
                required
                fullWidth
              />
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Box className={classes.cardActionsBox} display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </CardActions>
      </Card>
    </form>
  );
};

export default EquipmentFormView;
