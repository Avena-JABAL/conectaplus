export default function Field({ id, label, type = 'text', ...rest }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} {...rest} />
    </div>
  )
}