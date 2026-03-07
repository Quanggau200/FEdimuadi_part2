import { Input } from "antd";
import type { InputProps, GetProps } from "antd";

type PasswordProps = GetProps<typeof Input.Password>;
export const AppInput = ({className, ...props}:InputProps) => {
    return (
       <Input className={`!w-full !px-4 !py-3 text-sm ${className ?? ""}`} 
      {...props}/>
    )
}
export const AppPassword = ({className, ...props}:PasswordProps) => {
    return (
       <Input.Password className={`!w-full !px-4 !py-3 !text-sm" ${className ?? ""}`}
      {...props}/>
    )
}