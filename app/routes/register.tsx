import RegisterForm from '~/register/RegisterForm';
import type { Route } from './+types/register';

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  console.log(JSON.stringify(formData));

  // TODO: Add API call to create the user
  // let email = formData.get('email');
  // let name = formData.get('name');
}

export default function Register({ actionData }: Route.ComponentProps) {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col p-6 items-center rounded-lg border min-h-96 w-md space-y-4">
        <h1 className="font-semibold text-xl">Create an Account</h1>
        <RegisterForm />
        {/* {actionData ? <p>{actionData.name} added</p> : null} */}
      </div>
    </main>
  );
}
