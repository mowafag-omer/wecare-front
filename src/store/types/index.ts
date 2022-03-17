export type action = {
  type: string,
  payload: object
}

export type user = {
  email: string,
  password: string,
  access_token: string
}

export type userStore = {
  token: user | null,
  isLogged: boolean
}
