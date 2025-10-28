import { Form } from 'react-router';
import TextField from '~/components/ui/TextField';

export default function RegisterForm() {
  return (
    <Form className="w-full space-y-4" method="post">
      <TextField
        label="Your Name"
        labelProps={{ htmlFor: 'name' }}
        inputProps={{ name: 'name' }}
      />
      <TextField
        label="Email"
        labelProps={{ htmlFor: 'email' }}
        inputProps={{ name: 'email', type: 'email' }}
      />
      <TextField
        label="Password"
        labelProps={{ htmlFor: 'password' }}
        inputProps={{ name: 'password', type: 'password' }}
      />
      <br />
      <button
        type="submit"
        className="w-full flex font-semibold text-sm p-2 items-center justify-center text-center rounded-sm bg-blue-600"
      >
        Submit
      </button>
    </Form>
  );
}
