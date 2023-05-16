export const api = axios.create({
  baseURL: "https://testador2000.myshopify.com/admin/api/2023-01/graphql.json",
  timeout: 8000,
  headers: {
    "x-access-token": userData?.accessToken,
    "Content-Type": "application/json",
  },
})
