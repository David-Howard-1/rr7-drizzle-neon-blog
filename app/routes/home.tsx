import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Blog Site' }];
}

export default function Home() {
  return <Welcome />;
}
