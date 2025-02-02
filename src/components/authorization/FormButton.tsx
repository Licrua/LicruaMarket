type FormButtonProps = {
  isPending: boolean
  status: string
}

const FormButton = ({ isPending, status }: FormButtonProps) => (
  <button disabled={isPending} className="btn btn-primary w-full">
    {isPending ? 'Отправка...' : status}
  </button>
)

export default FormButton
