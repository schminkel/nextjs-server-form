'use client'

import { z } from 'zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useServerAction } from 'zsa-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { createTaskFormAction } from '@/app/task/actions'
import { LoaderButton } from '@/components/loader-button'
import { btnIconStyles } from '@/styles/icons'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { Terminal, StarsIcon } from 'lucide-react'

/**
 * @description
 * This is the form schema for the create task form.
 * It uses Zod to validate the input.
 */
export const createTaskFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long!' }),
})

/**
 * @description
 * This is the create task form component.
 * It uses React Hook Form to manage the form state and ZSA-React to handle the form submission.
 */
export function CreateTaskForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const { execute, error, isPending } = useServerAction(createTaskFormAction, {
    onSuccess: () => {
      toast.success('Task created successfully!')
      setTimeout(() => {
        setIsSubmitting(false)
        router.push('/')
      }, 1000)
    },
    onError: () => {
      toast.error(`Something went wrong: ${error?.message}`)
      setTimeout(() => {
        setIsSubmitting(false)
      }, 300)
    },
  })

  const form = useForm<z.infer<typeof createTaskFormSchema>>({
    resolver: zodResolver(createTaskFormSchema),
    defaultValues: {
      title: '',
    },
  })

  const onSubmit: SubmitHandler<z.infer<typeof createTaskFormSchema>> = (
    values,
  ) => {
    setIsSubmitting(true)
    execute({
      title: values.title,
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-1 flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Title:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <LoaderButton
            isLoading={isSubmitting || isPending}
            icon={<StarsIcon className={btnIconStyles} />}
          >
            Create Task
          </LoaderButton>

          {error && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle className="mt-1">An error occurred!</AlertTitle>
              <AlertDescription className="mt-2">
                {error.message}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </>
  )
}
