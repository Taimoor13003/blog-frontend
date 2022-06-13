import * as React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginRegisterTab = () => {
    return (
		<>
			<Tabs>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                </TabList>

                <TabPanel>
                    <LoginForm />
                </TabPanel>

                <TabPanel>
                    <RegisterForm />
                </TabPanel>
            </Tabs>
		</>
    );
}

export default LoginRegisterTab;