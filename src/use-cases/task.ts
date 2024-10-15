import { PublicError } from './errors'

export async function createTaskUseCase({ title }: { title: string }) {
  if (title === 'err') {
    throw new PublicError('Error creating task')
  }

  console.log('### createTaskUseCase --> title:', title)
}
