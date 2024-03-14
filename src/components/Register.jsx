import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../helper/api_helper";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleClick = async () => {
        try {
            await registerUser(formData);
            navigate("/login");
        } catch (err) {
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
                    Register
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
                    <Link to="/login" className="gradient_text">
                        &nbsp;Login
                    </Link>
                </p>
                <input
                    type="submit"
                    className="btn1"
                    value="Register"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Register;
