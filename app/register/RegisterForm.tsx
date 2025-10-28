import { Button, PasswordInput, TextInput } from '@mantine/core';
import { Form } from 'react-router';
import TextField from '~/components/ui/TextField';

export default function RegisterForm() {
  return (
    <Form className="w-full space-y-4" method="post">
      <TextInput
        label="Your name"
        placeholder="Your full name here"
        name="name"
        withAsterisk
      />
      <TextInput
        label="Email"
        placeholder="me@example.com"
        name="email"
        withAsterisk
      />
      <PasswordInput label="Password" name="password" withAsterisk />
      {/* <TextField
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
      /> */}
      <br />
      <Button
        type="submit"
        className="w-full flex font-semibold text-sm p-2 items-center justify-center text-center rounded-sm bg-blue-600"
      >
        Submit
      </Button>
    </Form>
  );
}
