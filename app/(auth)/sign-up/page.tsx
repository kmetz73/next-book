'use client';

import AuthFrom from '@/components/AuthFrom';
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
    onSubmit={() => {}}
  />
);
export default SignUp;
