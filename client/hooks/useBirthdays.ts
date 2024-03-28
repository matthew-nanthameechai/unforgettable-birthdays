import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getBirthDays, addBirthday } from '../apis/apiClient'
import { Birthday, BirthdayData } from '../../models/birthday'

export function useGetBirthdays() {
  return useQuery({
    queryKey: ['birthdays'],
    queryFn: async () => getBirthDays(),
  })
}

export function useAddBirthday() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (newBirthday: BirthdayData) => addBirthday(newBirthday),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['birthdays'],
      })
    },
  })
}
