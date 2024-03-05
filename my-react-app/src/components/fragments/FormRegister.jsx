import InputForm from "../elements/Input";
import Button from "../elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="Fullname"
        placeholder="Insert your name here..."
      ></InputForm>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="********"
      ></InputForm>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
