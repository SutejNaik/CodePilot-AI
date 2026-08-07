import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthHeader from "../components/auth/AuthHeader";
import FormInput from "../components/auth/FormInput";
import Button from "../components/common/Button";

import api from "../api/axios";


export default function Register() {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const [message, setMessage] = useState("");



    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    }



    async function handleSubmit(e) {

        e.preventDefault();


        if (formData.password !== formData.confirmPassword) {

            setMessage("Passwords do not match");
            return;

        }


        try {

            const response = await api.post(
                "/auth/register",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }
            );


            setMessage(response.data.message);


            setTimeout(() => {

                navigate("/login");

            }, 1000);


        }
        catch (error) {

            setMessage(
                error.response?.data?.detail ||
                "Registration failed"
            );

        }

    }



    return (
        <AuthLayout>

            <AuthCard>

                <AuthHeader
                    title="Create Account"
                    description="Join CodePilot-AI today"
                />


                <form onSubmit={handleSubmit}>


                    <FormInput
                        name="name"
                        label="Full Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />


                    <FormInput
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />


                    <FormInput
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="Create password"
                        value={formData.password}
                        onChange={handleChange}
                    />


                    <FormInput
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />


                    <Button
                        type="submit"
                        className="w-full mt-4"
                    >
                        Create Account
                    </Button>


                </form>


                {
                    message && (

                        <p className="text-center text-blue-400 mt-4">
                            {message}
                        </p>

                    )
                }



                <p className="text-center text-slate-400 mt-6">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-blue-500 hover:text-blue-400"
                    >
                        Login
                    </Link>

                </p>


            </AuthCard>

        </AuthLayout>
    );
}