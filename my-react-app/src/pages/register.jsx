import AuthLayout from "../components/layout/AuthLayouts";
import FormRegister from "../components/fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister></FormRegister>
    </AuthLayout>
  );
};

export default RegisterPage;
