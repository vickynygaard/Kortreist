import Page from '@/components/page'
import Section from '@/components/section'
import { useUserAuth } from "@/components/userAuth";
import { useEffect, useState } from 'react';

interface User {
  userId: number;
  name: string;
  email: string;
  totalScore: number;
  companyId: number;
}

interface Company {
  companyId: number;
  name: string;
}

const Profile: React.FC = () => {
  const { userData, loading, error } = useUserAuth();
  const [fullUser, setFullUser] = useState<User | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [updateMessage, setUpdateMessage] = useState<string>("");

  useEffect(() => {
    if (!userData?.accessToken) return;
    const fetchFullUser = async () => {
      try {
        const response = await fetch("http://localhost:5279/api/Profile/getUser", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error fetching user profile: ${response.statusText}`);
        }
        const data = await response.json();
        setFullUser(data);
        setSelectedCompanyId(data.companyId);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };
    fetchFullUser();
  }, [userData?.accessToken]);

  // Fetch companies
  useEffect(() => {
    if (!userData?.accessToken) return;
    const fetchCompanies = async () => {
      try {
        const response = await fetch("http://localhost:5279/api/Profile/allComp", {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(`Error fetching companies: ${response.statusText}`);
        }
        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        console.error("Failed to fetch companies:", err);
      }
    };
    fetchCompanies();
  }, [userData?.accessToken]);

  const handleUpdateCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData?.accessToken || !userData?.email || selectedCompanyId === null) return;
    try {
      const response = await fetch("http://localhost:5279/api/Profile/companySet", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.accessToken}`,
        },
        body: JSON.stringify({
          email: userData.email,
          companyId: selectedCompanyId
        }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      const data = await response.json();
      setUpdateMessage(data.message || "Company updated successfully.");
    } catch (error: any) {
      console.error("Error updating company:", error);
      setUpdateMessage("Failed to update company.");
    }
  };

  return (
    <Page>
      <Section>
        {loading && <p>Loading user data...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        <div className="mb-6">
          {userData ? (
            <>
              <p>Logged in as: {userData.email}</p>
              <p>Name: {userData.name}</p>
              <pre className="bg-gray-800 text-gray-100 p-2 rounded mt-2">
                {JSON.stringify(userData.idTokenClaims, null, 2)}
              </pre>
            </>
          ) : (
            <p>No user authenticated.</p>
          )}
        </div>

        <div className="mb-6">
          <h3>Update Your Company</h3>
          <form onSubmit={handleUpdateCompany} className="flex flex-col gap-2">
            <label htmlFor="companySelect">Select your company:</label>
            <select
              id="companySelect"
              value={selectedCompanyId ?? ""}
              onChange={(e) => setSelectedCompanyId(Number(e.target.value))}
              className="border p-2 rounded"
            >
              <option value="" disabled>Select a company</option>
              {companies.map((company) => (
                <option key={company.companyId} value={company.companyId}>
                  {company.name}
                </option>
              ))}
            </select>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Update Company
            </button>
          </form>
          {updateMessage && <p>{updateMessage}</p>}
        </div>
      </Section>
    </Page>
  );
};

export default Profile;
