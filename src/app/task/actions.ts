'use server'

import { z } from 'zod'
import { createTaskUseCase } from '@/use-cases/task'
import { unauthenticatedAction } from '@/lib/safe-action'

export const createTaskFormAction = unauthenticatedAction
  .createServerAction()
  .input(
    z.object({
      title: z.string().min(3),
    }),
  )
  .handler(async ({ input: { title } }) => {
    // Run task creation use case
    await createTaskUseCase({ title: title })
  })
