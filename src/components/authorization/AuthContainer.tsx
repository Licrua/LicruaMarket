import { ReactNode } from 'react'

interface AuthContainerType {
  header: string
  greet: string
  description: string
  children: ReactNode
}
function AuthContainer({
  header,
  greet,
  description,
  children,
}: AuthContainerType) {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl py-3 font-bold">{header}</h1>
          <span className="bg-purple-200 p-1">{greet}</span>
          <p className="mt-3">
            <em>{description}</em>
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthContainer
