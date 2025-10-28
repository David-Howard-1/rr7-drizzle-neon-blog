import type { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

interface TextFieldProps {
  label?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const TextField = ({ label, labelProps, inputProps }: TextFieldProps) => {
  return (
    <div className="flex flex-col w-full text-left">
      <label {...labelProps} className="text-sm">
        {label}
      </label>
      <input {...inputProps} className="border rounded-sm leading-8 px-2" />
    </div>
  );
};

export default TextField;
