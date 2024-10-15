'use server'

import { unauthenticatedAction } from '@/lib/safe-action'
import { triggerActionUseCase } from '@/use-cases/action'

export const triggerServerAction = unauthenticatedAction
  .createServerAction()
  .handler(async () => {
    // Run action use case
    await triggerActionUseCase()
  })
