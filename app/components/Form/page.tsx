"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  emailAddress: z.string().email({
    message:"Please enter a valid email address"
    }),
  });

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      emailAddress: ""
    }})
    const handleSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input placeholder="Email Address" type="email" {...field}/>
              </FormControl>
              <FormMessage/> 

            </FormItem>
          )}
        />
        <Button className="w-full bg-accent-default text-white rounded-none tracking-wide mt-0" type="submit">Submit</Button>

      </form>
    </Form>
  )
}

export default ProfileForm
