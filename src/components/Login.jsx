import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helper/api_helper";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleClick = async () => {
        try {
            const token = await loginUser(formData);
            localStorage.setItem("token", token?.data?.token);
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("Something Went Wrong");
        }
    };

    const handleChange = (tag, value) => {
        setFormData((pre) => ({
            ...pre,
            [`${tag}`]: value,
        }));
    };

    return (
        <div className="center_div w-screen h-screen px-2 md:px-0">
            <div className="w-[400px] h-[400px] center_div flex-col gap-y-6">
                <p className="text-2xl font-semibold self-start py-2 border-b-4 w-[20px] border-green-500 ">
                    Login
                </p>
                <input
                    type="text"
                    className="input_box"
                    placeholder="email"
                    onChange={(e) => {
                        handleChange("email", e.target.value);
                    }}
                />
                <input
                    onChange={(e) => {
                        handleChange("password", e.target.value);
                    }}
                    type="password"
                    className="input_box"
                    placeholder="password"
                />
                <p className="self-end">
                    Already have an account?
                    <Link to="/register" className="gradient_text">
                        &nbsp;Register
                    </Link>
                </p>
                <input
                    type="submit"
                    className="btn1"
                    value="Login"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Login;
