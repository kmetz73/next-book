'use client';

import AuthFrom from '@/components/AuthFrom';
import { signUp } from '@/lib/actions/auth';
import { signUpSchema } from '@/lib/validations';

const SignUp = () => (
  <AuthFrom
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: '',
      password: '',
      fullName: '',
      universityId: 0,
      universityCard: '',
    }}
    onSubmit={signUp}
  />
);
export default SignUp;
