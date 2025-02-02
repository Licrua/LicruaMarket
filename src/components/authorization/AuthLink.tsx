import Link from 'next/link'

function AuthLink({ route, name }: { route: string; name: string }) {
  return (
    <div>
      <Link href={route}>
        <button className="btn text-center w-full btn-primary">{name}</button>
      </Link>
    </div>
  )
}

export default AuthLink
