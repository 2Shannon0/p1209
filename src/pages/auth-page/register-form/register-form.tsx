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
import {
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const REQUIRED_FIELD = 'Обязательное поле';

interface ISignInForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  snils: string;
  cb: boolean;
}

const RegisterForm = (props: any) => {
  const { handleSubmit, control, register, reset, trigger, watch } =
    useForm<ISignInForm>({
      defaultValues: {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        snils: '',
        cb: true,
      },
      mode: 'onTouched',
    });
  const { errors } = useFormState({
    control,
  });
  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: 500,
        backgroundColor: 'white',
        marginTop: 2,
        borderRadius: 5,
      }}
    >
      <Avatar alt="abitu" src="././abitu.png" sx={{ width: 24, height: 24 }} />
      <Typography variant="h5">Регистрация</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              label="Имя*"
              size="small"
              margin="normal"
              fullWidth={true}
              value={field.value}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
              {...register('name', {
                required: REQUIRED_FIELD,
                pattern: {
                  value: /^([ \u00c0-\u01ffa-zA-Zа-яА-Я'\-])+$/,
                  message: 'Используйте русские/английские буквы',
                },
              })}
              onKeyUp={() => {
                trigger('name');
              }}
            />
          )}
        />
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
                  message: 'Пожалуйста, введите корректный адрес почты',
                },
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
              size="small"
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

        <Controller
          control={control}
          name="repeatPassword"
          render={({ field }) => (
            <TextField
              label="Повторите пароль*"
              size="small"
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
              margin="normal"
              fullWidth={true}
              value={field.value}
              error={!!errors.repeatPassword?.message}
              helperText={errors.repeatPassword?.message}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              {...register('repeatPassword', {
                required: REQUIRED_FIELD,
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Пароли не совпадают';
                  }
                },
              })}
              onKeyUp={() => {
                trigger('repeatPassword');
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="snils"
          render={({ field }) => (
            <TextField
              label="СНИЛС*"
              placeholder="123-456-789-12"
              size="small"
              margin="normal"
              fullWidth={true}
              value={field.value}
              error={!!errors.snils?.message}
              helperText={errors.snils?.message}
              {...register('snils', {
                required: REQUIRED_FIELD,
                pattern: {
                  value: /^\d{3}-\d{3}-\d{3}-\d{2}$/,
                  message: 'Проверьте формат СНИЛС: 123-456-789-12',
                },
                maxLength: {
                  value: 14,
                  message: 'Максимальная длина СНИЛС составляет 14 символов',
                },
                minLength: {
                  value: 14,
                  message: 'Минимальная длина СНИЛС составляет 14 символов',
                },
              })}
              onKeyUp={() => {
                trigger('snils');
              }}
            />
          )}
        />

        <FormControlLabel
          control={<Checkbox checked size="small" />}
          label="Я даю согласие на обработку персональных данных"
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
          Зарегистрироваться
        </Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
