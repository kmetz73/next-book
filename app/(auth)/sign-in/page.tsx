'use client';

import AuthFrom from '@/components/AuthFrom';
import { signInWithCredentials } from '@/lib/actions/auth';
import { signInSchema } from '@/lib/validations';

const SignIn = () => (
  <AuthFrom
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{ email: '', password: '' }}
    onSubmit={signInWithCredentials}
  />
);
export default SignIn;
