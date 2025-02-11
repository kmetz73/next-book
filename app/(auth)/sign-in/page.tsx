'use client';

import AuthFrom from '@/components/AuthFrom';
import { signInSchema } from '@/lib/validations';

const SignIn = () => (
  <AuthFrom
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ email: '', password: '' }}
    onSubmit={() => {}}
  />
);
export default SignIn;
