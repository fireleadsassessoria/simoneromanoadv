import * as React from "react";
import { Input } from "@/components/ui/input";

export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/\D/g, "");
      
      if (value.length <= 11) {
        if (value.length <= 2) {
          value = value.replace(/^(\d{0,2})/, "($1");
        } else if (value.length <= 6) {
          value = value.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
        } else if (value.length <= 10) {
          value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else {
          value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
        }
      }
      
      e.target.value = value;
      if (onChange) {
        onChange(e);
      }
    };

    return <Input ref={ref} onChange={handleChange} {...props} />;
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
