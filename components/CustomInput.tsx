import { Control, FieldPath, } from 'react-hook-form'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';
import { Input } from './ui/input';

const formSchema = z.object({
    email: z.string().email({
      message: "Invalid email, please enter a valid email",
    }),
  })

interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
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

export default CustomInput