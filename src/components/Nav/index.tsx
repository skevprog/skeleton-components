import { Dispatch, SetStateAction } from 'react';
import useSWR from 'swr'
import { getUsers, usersUrlEndpoint } from '../../api/usersApi';

function Nav({ setUserId }: { setUserId: Dispatch<SetStateAction<number>>}) {

   const { data: users, error, isLoading, mutate } = useSWR(usersUrlEndpoint, getUsers, {
      revalidateOnFocus: false
   })

   let options;

   if (isLoading) {
      options = <option>Loading...</option>
   }
   else if (!error) {
      options = users.map((user: User) => {
         return (
            <option key={`opt${user.id}`} value={user.id}>
               {user.name}
            </option>
         )
      })
      const titleValue =
         <option key="opt0" value={0}>
            Employees
         </option>
      options.push(titleValue)
   }

   if (error && !isLoading) {
      return (
         <>
            <h3>Something went wrong</h3>
            <button type="button" onClick={() => mutate()}>
               Try again
            </button>
         </>)
   }
   return (
      <select
         name="selectMenu"
         id="selectMenu"
         onChange={(e) => { setUserId(Number(e.target.value)) }} aria-label="Employee Name"
         className="selectMenu">
         {options}
      </select>
   )
}

export default Nav;
