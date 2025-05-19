import Cookies from "js-cookie";

const getToken = () => {
  const token = Cookies.get("bearerToken")
  return token ? {"Authorization": `Bearer ${token}`} : {}
}

const getBaseRequest = async (url: string, method: "GET" |
  "PUT" | "POST", body ?: {
  [key: string]: any
}) => {
  try {
    return await fetch(`${import.meta.env.VITE_BASE_API_URL}${url}`, {
      method: method,
      headers: getToken(),
      body: ["PUT", "POST"].includes(method) ? JSON.stringify(body) : undefined
    })
  } catch (e) {
    console.error(e)
    throw e.message
  }
}

const Queries = Object.freeze(
  {
    GET: async (url: string) => await getBaseRequest(url, "GET"),
    POST: async (url: string, body: { [key: string]: any }) => await getBaseRequest(url, "POST", body),
    PUT: async (url: string, body: { [key: string]: any }) => await getBaseRequest(url, "PUT", body)
  }
)