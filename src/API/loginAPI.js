import { POST } from "../utils/http";
async function loginAPI({
  info,
  setIsLoading,
  setServerError,
  setIsLogin,
  setToken,
  history,
  setIsFormLoading,
}) {
  try {
    setIsFormLoading(true);
    const { response, json } = await POST("/api/auth/login", info);
    const { message } = json;
    setIsFormLoading(false);
    
    if (response.status === 200) {
      setServerError("");
      setIsLoading(true);
      const { token } = json;
      await setToken(token);
      setIsLogin();
      return history.push("/menu");
    }
    setServerError(message);
  } catch (err) {
    console.log(err);
  }
}
export default loginAPI;
