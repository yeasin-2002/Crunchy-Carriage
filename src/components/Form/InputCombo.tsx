import { cn } from "@/utils";
import { DetailedHTMLProps, InputHTMLAttributes, useId } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  title?: string;
}

export const InputCombo = ({
  title = "",
  className,
  labelClassName,
  wrapperClassName,
  ...rest
}: Props) => {
  const id = useId();
  return (
    <div className={cn(wrapperClassName)}>
      <label
        htmlFor={id}
        className={cn(
          "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
          labelClassName
        )}
      >
        {title}
      </label>
      <input
        {...rest}
        id={id}
        className={cn(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
      />
    </div>
  );
};
