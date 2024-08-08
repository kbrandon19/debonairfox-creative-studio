'use client';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


const FormSchema = z.object({
  firstname: z.string().min(1),
  email: z.string().min(1) //.min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
})

const NewsLetterForm = () =>{
 const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues:{
        firstname:"",
        email:""
      }
    })

    const onSubmit = () =>{
      console.log('form submitted');
    }

  return (
<>
<p className="text-xs smd:text-sm max-w-96 italic">Dont miss out on any new updates. Sign up to receive updates about design, services, tips and more!</p>
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 max-w-80 flex flex-col md:flex-row md:gap-x-3 md:max-w-96">
      <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormMessage />
              <FormControl>
                <Input className="border-none text-xs tracking-widest uppercase text-accent-default " placeholder="name" type='text'{...field} />
              </FormControl>
              
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className=" border-none text-xs tracking-widest uppercase md:w-48 text-accent-default " type='email' placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='w-full md:w-32 bg-accent-default text-white mt-3 text-xs tracking-widest'>Submit</Button>
      </form>
    </Form>
    </>
  )
  
}

export default NewsLetterForm;
