type FormButtonProps = {
  isPending: boolean
  status: string
}

const FormButton = ({ isPending, status }: FormButtonProps) => (
  <button disabled={isPending} className="btn btn-primary">
    {isPending ? 'Отправка...' : status}
  </button>
)

export default FormButton
