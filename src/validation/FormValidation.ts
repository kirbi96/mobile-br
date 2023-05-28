export const FormValidation = {
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Формат Email неверный',
    },
  },
  required: {
    required: 'Данное поле обязательное для заполнения',
  },

  password: () => {
    return {
      required: 'Данное поле обязательное для заполнения',
      minLength: {value: 6, message: 'Длина пароля минимум 6 символов'},
    };
  },

  passwordConfirm: (watch: any) => {
    return {
      required: 'Данное поле обязательное для заполнения',
      minLength: {value: 6, message: 'Длина пароля минимум 6 символов'},
      validate: (value: string) =>
        value === watch('password') || 'Пароли не совпадают',
    };
  },
};
