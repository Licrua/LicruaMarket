import Link from 'next/link'

const LoginLink = () => (
  <div>
    <Link href={'/signIn'}>
      <button className="btn text-center w-full btn-primary">Войти</button>
    </Link>
  </div>
)

export default LoginLink
