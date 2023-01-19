import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from 'react-hook-form';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const REQUIRED_FIELD = 'Обязательное поле'

interface ISignInForm {
  email: string;
  password: string;
  cb: boolean;
}

const AuthForm = () => {
  const { handleSubmit, control, register, trigger } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
      cb: false
    },
    mode: 'onTouched'
  });
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(JSON.stringify(data));
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
<Container
      maxWidth="sm"
      sx={{
        height: 350,
        backgroundColor: 'white',
        // borderColor: 'black',
        marginTop: 2,
        borderRadius: 5
      }}
    >
      <Avatar alt="abitu" src="../../../images/abitu.png" sx={{ width: 24, height: 24 }} />
      <Typography variant="h5">Вход</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              label="Email*"
              type="email"
              size="small"
              placeholder="example@gmail.com"
              margin="normal"
              fullWidth={true}
              value={field.value}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
              {...register('email', {
                required: REQUIRED_FIELD,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: "Пожалуйста, введите корректный адрес почты"
              }
              })}
              onKeyUp={() => {
                trigger('email');
              }}
            />
          )}
        />

<Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              label="Пароль*"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
              margin="normal"
              fullWidth={true}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
              {...register('password', {
                required: REQUIRED_FIELD,
                pattern: {
                  value:
                    /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_]{10,16}$/,
                  message:
                    'Пароль должен содержать по крайней мере один верхний регистр, одно числовое значение и один специальный символ',
                },
                maxLength: {
                  value: 20,
                  message: 'Максимальная длина пароля составляет 20 символов',
                },
                minLength: {
                  value: 8,
                  message: 'Минимальная длина пароля составляет 8 символов',
                },
              })}
              onKeyUp={() => {
                trigger('password');
              }}
            />
          )}
        />

        <FormControlLabel
          control={
            <Controller
              name="cb"
              control={control}
              render={({ field: props }) => (
                <Checkbox
                  {...props}
                  checked={props.value}
                  onChange={(e) => props.onChange(e.target.checked)}
                  size="small"
                />
              )}
            />
          }
          label="Остаться в системе"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>
    </Container>

  );
};

export default AuthForm;
