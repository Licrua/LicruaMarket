import Link from 'next/link';

const LoginLink: React.FC = () => (
  <div>
    <Link href={'/logIn'}>
      <button className="btn text-center w-full btn-primary">Войти</button>
    </Link>
  </div>
);

export default LoginLink;
