import { Button } from "antd";
import {Checkbox} from "antd";
import type { ButtonProps,CheckboxProps } from "antd";
import { useTranslation } from "react-i18next";
import {ArrowLeftOutlined} from "@ant-design/icons";
interface BackButtonProps {
  onClick: () => void;
}
export const AppButton = ({className, ...props}:ButtonProps) => {
    return (
       <Button className={`!w-full !px-4 !py-3 !text-sm" ${className ?? ""}`}
      {...props}/>
    )
}
export const AppBackButton = ({ onClick }: BackButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      type="primary"
      icon={<ArrowLeftOutlined alt="arrowback" className="h-5 w-5" />}
      onClick={onClick}
      className="w-fit !h-12 transition !rounded-2xl border-2 py-3 px-4 !bg-white !text-black"
    >
      {t("LABEL.BACK")}
    </Button>
  );
};
export const AppCheckbox = ({className, ...props}:CheckboxProps) => {
    return (
       <Checkbox className={`text-red-500 border-gray-300 rounded focus:ring-red-400 accent-red-500" ${className ?? ""}`}
      {...props}/>
    )
}
export const AppButtonSignWith = ({className, ...props}:ButtonProps) => {
    return (
       <Button className={`w-full bg-gray-50 mt-3 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition duration-200" ${className ?? ""}`}
      {...props}
    
      />
    )
}
export const AppSubmit = ({ children, className,...props }: ButtonProps) => {
  return (
    <Button
      block
      className={`!text-white !rounded-xl !bg-success !border-none !font-semibold !shadow-md !shadow-red-200 hover:!bg-hover !transition !duration-200 ${className ?? ""} `}
      {...props}
    >
      {children}
    </Button>
  );
};