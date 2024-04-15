type FormFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  large?: boolean;
};

export default function FormField({
  id,
  label,
  type,
  placeholder,
  large = false,
}: FormFieldProps) {
  const inputClass = large
    ? "appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-4 px-5 mb-3 leading-6 text-lg focus:outline-none focus:bg-white"
    : "appearance-none block bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white";

  // Conditionally apply classes based on the 'large' prop
  const containerClass = large ? "w-full" : "w-full md:w-1/2";

  return (
    <div className={containerClass + "mb-6 md:mb-0"}>
      <label
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2 w-full"
        htmlFor={id}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={inputClass}
          id={id}
          placeholder={placeholder}
          rows={5}
        />
      ) : (
        <input
          className={inputClass}
          id={id}
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
