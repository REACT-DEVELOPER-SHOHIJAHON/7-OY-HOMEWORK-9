import { Button, Form, Input, Typography, notification } from "antd";
import { useSignUpMutation } from "../../../redux/api/authAPi";
import { signUp } from "../../../redux/slices/authSlice.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const { Title, Text } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpRequest, { data, isSuccess }] = useSignUpMutation();
  const onFinish = (values) => {
    signUpRequest(values);
  };
  console.log(data);

  useEffect(() => {
    if (isSuccess) {
      dispatch(signUp({ token: data.payload.token }));
      notification.success({
        message: "Successfully signed up! Go ahead 😊",
      });
      navigate("/profile");
    }
  }, [isSuccess]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        className="p-4"
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={2} className="text-center">
          Sing Up
        </Title>
        <Form.Item
          label="Firstname"
          name="first_name"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Photo URL"
          name="photo_url"
          rules={[
            {
              required: true,
              message: "Please input your photo url!",
            },
          ]}
        >
          <Input type="url" />
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
        <Text>
          Alredy have an account? <Link to="/auth/login">Log in</Link>
        </Text>
      </Form>
    </>
  );
};

export default SignUp;
