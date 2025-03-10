import { Input } from "./input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";

const ControlledInput = ({
    // Name of the input
    name,
    // email, text, password, number
    type,
    // useForm() hook from react-hook-form
    form,
    // (optional) Label for the input
    label,
    // (optional) Description for the input
    desc,
    // ----- Optional
    disabled,
    placeholder,
}) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && (
                        <FormLabel>
                            {label}
                        </FormLabel>
                    )}
                    <FormControl>
                        <Input 
                            placeholder={placeholder || label ? "請輸入"+label : "--"} 
                            disabled={disabled}
                            {...field} 
                        />
                    </FormControl>
                    {desc && (
                        <FormDescription>
                            {desc}
                        </FormDescription>
                    )}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default ControlledInput;