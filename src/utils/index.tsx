import moment from 'moment'

import {User, ApiUser} from 'src/models'

const createaddress = ({country, state, city, street: {name, number}}: any) => {
  return `${country} ${state} ${city} ${name} ${number}`
}

const prepareUser = (user: ApiUser): User => ({
  id: user.login.uuid,
  fullname: `${user.name.first} ${user.name.last}`,
  phone: user.phone,
  email: user.email,
  dob: user.dob.date,
  checked: false,
  avatar: user.picture.thumbnail,
  gender: user.gender,
  address: createaddress(user.location)
})

export const prepareUsers = (users: ApiUser[]): User[] => users.map(prepareUser)

export const filterUsers = (users: User[], value: string) =>
  users.filter(user => user.fullname.toLowerCase().includes(value.toLowerCase()))

export const formatDate = (date: string) => moment(date).format('DD.MM.YYYY - HH:mm:ss')
