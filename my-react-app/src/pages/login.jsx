import AuthLayout from "../components/layout/AuthLayouts";
import FormLogin from "../components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin></FormLogin>
    </AuthLayout>
  );
};

export default LoginPage;
