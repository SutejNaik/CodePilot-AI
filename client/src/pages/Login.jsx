import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthHeader from "../components/auth/AuthHeader";
import FormInput from "../components/auth/FormInput";
import Button from "../components/common/Button";

import api from "../api/axios";


export default function Login() {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: "",
        password: ""
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


        try {

            const response = await api.post(
                "/auth/login",
                formData
            );


            localStorage.setItem(
                "token",
                response.data.access_token
            );


            setMessage("Login successful");


            setTimeout(() => {

                navigate("/dashboard");

            }, 1000);


        }
        catch (error) {

            setMessage(
                error.response?.data?.detail ||
                "Login failed"
            );

        }

    }



    return (
        <AuthLayout>

            <AuthCard>

                <AuthHeader
                    title="Welcome Back"
                    description="Login to continue using CodePilot-AI"
                />


                <form onSubmit={handleSubmit}>


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
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />


                    <Button
                        type="submit"
                        className="w-full mt-4"
                    >
                        Login
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

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="text-blue-500 hover:text-blue-400"
                    >
                        Create Account
                    </Link>

                </p>


            </AuthCard>

        </AuthLayout>
    );
}