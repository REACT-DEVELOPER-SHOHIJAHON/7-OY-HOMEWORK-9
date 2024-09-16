import React from "react";
import { Button, Input, Typography, notification } from "antd";
import { useLoginMutation } from "../../../redux/api/authAPi";
import { login } from "../../../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const { Title, Text } = Typography;


const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logInRequest, { data, isSuccess }] = useLoginMutation();

  
  const onFinish = (values) => {
    logInRequest(values);
    
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(login({ token: data.payload.token }));
      notification.success({
        message: "Successfully logged in!",
        description: "Redirecting to your profile...",
      });
      navigate("/profile");
    }
  }, [isSuccess, dispatch, navigate, data]);

  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  

  return (
    
    <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
      
      <Title level={2} className="text-center text-gray-800 mb-6">
        Login
      </Title>

      <form
        name="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const values = Object.fromEntries(formData);
          onFinish(values);
        }}
        autoComplete="off">
        
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            Username
          </label>
          <Input
            id="username"
            name="username"
            placeholder="Enter your username"
            className="border border-gray-300 rounded-md p-3 w-full text-gray-800"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <Input.Password
            id="password"
            name="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-3 w-full text-gray-800"
            required
          />
        </div>

        <Button
          className="w-full bg-teal-600 text-white hover:bg-teal-700 rounded-md py-2"
          type="submit"
        >
          Login
        </Button>

        <Text className="block text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link className="text-teal-600 hover:underline" to="/auth/signup">
            Sign Up
          </Link>
        </Text>
        
      </form>
      
    </div>
    
  );
};

export default Login;
