interface FormInputProps {
  type: string
  name: string
  label: string
  placeholder: string
}

const FormInput = ({ type, name, label, placeholder }: FormInputProps) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="input input-bordered"
      required
    />
  </div>
)

export default FormInput
