"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleLoginFunc = async (data) => {
        // console.log(data, 'data');
        const {data: res, error} = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/'
        })
        // console.log("data", res, error, 'error');
    }
    
    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center'>
            <div className="bg-white p-4 rounded-xl">
                <h1 className='font-bold text-3xl mb-6 text-center'>Login your account</h1>
                <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter your E-mail</legend>
                        <input {...register("email", { required: "E-mail Field is Required" })} type="email" className="input" placeholder="Type here email" />
                        {
                            errors.email && <p className='text-red-500'>{errors.email.message}</p>
                        }
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter your Password</legend>
                        <input {...register("password", { required: "PassWord Field is Required" })} type="password" className="input" placeholder="Type here password" />
                        {
                            errors.password && <p className='text-red-500'>{errors.password.message}</p>
                        }
                    </fieldset>
                    <button className='btn bg-slate-800 text-white w-full'>Login</button>
                    <p>Dont’t Have An Account ? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;