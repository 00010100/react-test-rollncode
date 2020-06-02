export interface ApiUser {
  login: {uuid: string}
  picture: {thumbnail: string}
  name: {first: string; last: string}
  email: string
  location: {
    city: string
    country: string
    state: string
    street: {number: number; name: string}
  }
  gender: string
  dob: {date: string}
  phone: string
}
