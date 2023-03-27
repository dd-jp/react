/* eslint-disable */
import axios from 'axios'

const client = axios.create({
  baseURL: './',
})

export const request = ({ ...options }) => {
  const onSuccess = (response: any) => response
  const onError = (error: any) => error

  return client(options).then(onSuccess).catch(onError)
}
