type InputFieldProps = {
  label: string
  type: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputFieldProps) => (
  <div className="form-control">
    <label className="label">
      <span className="label-text">{label}</span>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className="input input-bordered"
      required
      onChange={onChange}
    />
  </div>
)
export default InputField
