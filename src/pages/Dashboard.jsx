/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOneUserData } from "../helper/api_helper";
import _ from "lodash";

const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const result = await getOneUserData();
            setUserData(_.get(result, "data.data", []));
        } catch (err) {
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            return navigate("/login");
        }
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="center_div w-screen h-screen flex-col gap-y-5">
            <div className="text-2xl font-semibold">
                Welcome {userData?.email}
            </div>
            <button className="btn1 w-fit px-3 h-[40px]" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
