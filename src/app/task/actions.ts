'use server'

import { z } from 'zod'
import { createTaskUseCase } from '@/use-cases/task'
import { unauthenticatedAction } from '@/lib/safe-action'
import { taskSchema } from '@/app/task/create-task-form'

export const createTaskFormAction = unauthenticatedAction
  .createServerAction()
  .input(z.object(taskSchema))
  .handler(async ({ input: { title } }) => {
    // Run task creation use case
    await createTaskUseCase({ title: title })
  })
