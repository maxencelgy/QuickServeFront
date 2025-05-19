import Cookies from "js-cookie";

const getToken = () => {
  const token = Cookies.get("bearerToken")
  return token ? `Bearer ${token}` : undefined
}

const getHeaders = () => {
  const headers: {"Content-Type":string, Authorization?:string} = { 'Content-Type': 'application/json' }
  if (getToken()) {
    headers.Authorization = getToken()
  }
  return headers
}

const getBaseRequest = async (url: string, method: "GET" |
  "PUT" | "POST", body ?: {
  [key: string]: any
}) => {
  try {
    const response =  await fetch(`${import.meta.env.VITE_BASE_API_URL}${url}`, {
      method: method,
      headers: getHeaders(),
      body: ["PUT", "POST"].includes(method) ? JSON.stringify(body) : undefined
    })
    if (response.ok) {
      return await response.json()
    }
    const error = await response.json()
    return Promise.reject(new Error(error.message))
  } catch (e) {
    console.error(e)
    throw e
  }
}

export const Queries = Object.freeze(
  {
    GET: async (url: string) => await getBaseRequest(url, "GET"),
    POST: async (url: string, body: { [key: string]: any }) => await getBaseRequest(url, "POST", body),
    PUT: async (url: string, body: { [key: string]: any }) => await getBaseRequest(url, "PUT", body)
  }
)
