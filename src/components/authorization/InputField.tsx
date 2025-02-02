type InputFieldProps = {
  label: string
  type: string
  name: string
  placeholder: string
}

const InputField = ({ label, type, name, placeholder }: InputFieldProps) => (
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
export default InputField
