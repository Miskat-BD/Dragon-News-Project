"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleRegisterFunc = async (data) => {
        const { name, email, photo, password } = data;
        // console.log(data, 'data');
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: '/'
        })
        // console.log(res,'data', error, " error");
        if(error){
            alert(error.message)
        }
        if(res){
            alert("Sign Up Successfully")
        }
    }

    return (
        <div className='container mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center'>
            <div className="bg-white p-4 rounded-xl">
                <h1 className='font-bold text-3xl mb-6 text-center'>Register your account</h1>
                <form onSubmit={handleSubmit(handleRegisterFunc)} className='space-y-3'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter your Name</legend>
                        <input {...register("name", { required: "Name Field is Required" })} type="text" className="input" placeholder="Type here Name" />
                        {
                            errors.name && <p className='text-red-500'>{errors.name.message}</p>
                        }
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input {...register("photo", { required: "Photo URL Field is Required" })} type="text" className="input" placeholder="Type here Photo URL" />
                        {
                            errors.photo && <p className='text-red-500'>{errors.photo.message}</p>
                        }
                    </fieldset>
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
                    <button className='btn bg-slate-800 text-white w-full'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;