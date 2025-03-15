import Page from '@/components/page'
import Section from '@/components/section'
import Menu from "@/components/dropMenu";
import CityForm from "@/components/transportForm";
import LoginButton from "@/components/loginButton";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import LogoutButton from "@/components/logoutButton";
import SyncUserData from "@/components/senToBackend";
import dynamic from 'next/dynamic';


const Index = () => (

	
	<Page>
		<Section>
		
			<div className="app mt-4">
        <CityForm />
      </div>

	  <UnauthenticatedTemplate><h1><LoginButton /> Ikke logget inn</h1></UnauthenticatedTemplate>

	  <AuthenticatedTemplate>
  <h1>Logged in</h1>
  <LogoutButton />
  <SyncUserData />
  
</AuthenticatedTemplate>
	
	
		</Section>
	

			
	</Page>
)

export default Index
