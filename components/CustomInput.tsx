import { Control, FieldPath, } from 'react-hook-form'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
// import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';
import { Input } from './ui/input';

//utils.ts
//Uncomment the same to replace
//const formSchema = authFormSchema();
const formSchema = authFormSchema('sign-up');

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    type?: string
}

const CustomInput = ({control, name, label, placeholder, type} : CustomInput) => {
    
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            className='input-class'
                            type={type}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage
                        className='form-message mt-2'
                    />
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput;