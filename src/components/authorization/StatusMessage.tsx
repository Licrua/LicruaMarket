function StatusMessage({
  state,
}: {
  state:
    | {
        error: string
        sucess: string
        message?: undefined
      }
    | {
        message: string
        sucess: string
        error?: undefined
      }
    | null
}) {
  return (
    <>
      {state?.message && (
        <p className="text-green-500 mt-2 text-center">{state.message}</p>
      )}
      {state?.error && (
        <p className="text-red-500 mt-2 text-center">{state.error}!</p>
      )}
    </>
  )
}

export default StatusMessage
