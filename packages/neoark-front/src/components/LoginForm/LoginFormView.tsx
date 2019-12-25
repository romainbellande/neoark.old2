import React from 'react';
import { useFormik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

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
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const getFieldError = errorHandler(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item>
          <Input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
            error={getFieldError('email')}
            required
          />
          <FormHelperText error>{formik.errors.email}</FormHelperText>
        </Grid>

        <Grid item>
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            error={getFieldError('password')}
            required
          />
          <FormHelperText error>{formik.errors.password}</FormHelperText>
        </Grid>

        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EquipmentFormView;
