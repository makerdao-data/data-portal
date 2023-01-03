import { Api } from '../__generated__/dataAPI';

export const dataApiClient = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  baseApiParams: {
    headers: {
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_TOKEN
    }
  }
});
