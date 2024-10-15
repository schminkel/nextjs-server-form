'use server'

import { createTaskUseCase } from '@/use-cases/task'
import { unauthenticatedAction } from '@/lib/safe-action'
import { createTaskFormSchema } from '@/app/task/create-task-form'

export const createTaskFormAction = unauthenticatedAction
  .createServerAction()
  .input(createTaskFormSchema)
  .handler(async ({ input: { title } }) => {
    // Run task creation use case
    await createTaskUseCase({ title: title })
  })
