export interface RegisterUserFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  nickname: string;
  dateOfBirth: Date | undefined;
}
