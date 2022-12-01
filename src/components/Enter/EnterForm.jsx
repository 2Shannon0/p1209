import { useForm } from 'react-hook-form';
import { AccountCircle, LockOpenOutlined, VpnKey } from '@mui/icons-material';
import {
  Box,
  Paper,
  Grid,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material';
import { Formik, Form } from 'formik';
import styles from './EnterForm.module.css';
import * as yup from 'yup';

const EnterForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('Введите корректный email').required('Required'),
    password: yup.string().required('Required'),
  });

  const onSub = (values, props) => {
    console.log(values, props);
    // props.resetForm();
  };
  return (
    <Box className={styles.login}>
      <Paper evaluation={5} className={styles.paperStyle}>
        <Grid className={styles.grid}>
          <h1>Вход</h1>
          <Avatar className={styles.avatarLock}>
            <LockOpenOutlined />
          </Avatar>
          <h2>Введите ваши данные</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSub}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form className={styles.form}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle color="primary" sx={{ mr: 1 }} />
                <TextField
                  label="Email"
                  name="email"
                  color="primary"
                  placeholder="example@gmail.com"
                  fullWidth
                  variant="standard"
                  required
                  error={
                    Boolean(props.errors.email) && Boolean(props.touched.email)
                  }
                  helperText={
                    Boolean(props.touched.email) && props.errors.email
                  }
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <VpnKey color="primary" sx={{ mr: 1 }} />
                <TextField
                  label="Пароль"
                  name="password"
                  color="primary"
                  fullWidth
                  variant="standard"
                  required
                  error={
                    Boolean(props.errors.password) &&
                    Boolean(props.touched.password)
                  }
                  helperText={
                    Boolean(props.touched.password) && props.errors.password
                  }
                />
              </Box>
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
              >
                Войти
              </Button>
            </Form>
          )}
        </Formik>
        <Typography className={styles.typography}>
          <Link href="#" color="primary">
            Забыли данные?{' '}
          </Link>
          <Link href="#" color="primary">
            Зарегистрироваться
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};
export default EnterForm;
