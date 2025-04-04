import router from "next/router";
import toast from "react-hot-toast";

const BASE_URL = 'https://kortreistapi-h7e9d7gsb3bcgwhd.norwayeast-01.azurewebsites.net';

export async function fetcher(endpoint: string, token?: string) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${BASE_URL}${endpoint}`, { headers });
  if (!response.ok) {
    if (response.status === 428) {
      toast.error("Du må fullføre registreringen før du kan fortsette.");
      router.push("/onboarding");
      return;
    }
    const errorMessage = await response.text();
    throw new Error(`Error: ${response.statusText} - ${errorMessage}`);
  }
  return response.json();
}
