import axios, { AxiosError } from 'axios'

export const get = async (URL: string) =>
  await axios
    .get(URL)
    .then((response) => {
      // handle success
      console.log(response.status)
      return response.data
    })
    .catch((error: AxiosError) => {
      // handle error
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // console.log(error.rhttps://www.ntt.com/bizon/glossary/j-s/sandbox.htmlequest)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
