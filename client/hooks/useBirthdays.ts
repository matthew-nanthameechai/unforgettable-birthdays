import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getBirthDays, addBirthday } from '../apis/apiClient'
import { Birthday } from '../../models/birthday'

export function useGetBirthdays() {
  return useQuery({
    queryKey: ['birthdays'],
    queryFn: async () => getBirthDays(),
  })
}

export function useAddBirthday() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (newBirthday: Birthday) => addBirthday(newBirthday),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['birthdays'],
      })
    },
  })
}
