'use client'

import useSupabaseClient from '@/lib/supabase/client';
import Image from 'next/image';
import { login, signup } from './actions';

export default function LoginPage() {
   const supabase = useSupabaseClient();

    const loginWithGitHub = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const loginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>

      <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
        <p className='text-center font-semibold mx-4 mb-0'>OR</p>
      </div>

      <a
        className='px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'
        style={{ backgroundColor: '#3b5998' }}
        onClick={loginWithGoogle}
        role='button'
      >
        <Image
          className='pr-2'
          src='/images/google.svg'
          alt=''
          style={{ height: '2rem' }}
          width={35}
          height={35}
        />
        Continue with Google
      </a>
      <a
        className='px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center'
        style={{ backgroundColor: '#55acee' }}
        onClick={loginWithGitHub}
        role='button'
      >
        <Image
          className='pr-2'
          src='/images/github.svg'
          alt=''
          width={40}
          height={40}
        />
        Continue with GitHub
      </a>
    </form>
  )
}
