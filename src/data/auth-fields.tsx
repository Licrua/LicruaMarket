const signupFields = [
  {
    id: 1,
    label: 'Электронная почта',
    type: 'email',
    name: 'email',
    placeholder: 'Введите вашу почту',
  },
  {
    id: 2,
    label: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Введите пароль',
  },
  {
    id: 3,
    label: 'Подтвердите пароль',
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Подтвердите пароль',
  },
]

export const signinFields = [
  {
    id: 'email',
    label: 'Электронная почта',
    type: 'email',
    name: 'email',
    placeholder: 'Введите вашу почту',
  },
  {
    id: 'password',
    label: 'Пароль',
    type: 'password',
    name: 'password',
    placeholder: 'Введите пароль',
  },
]

export default signupFields
