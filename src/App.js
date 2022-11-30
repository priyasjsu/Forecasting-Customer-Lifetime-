import './App.css';
import TableauReport from "tableau-react";
import { withAuthenticator } from '@aws-amplify/ui-react';

const options = {
  device: "tablet",
  height: 2200,
  width: window.innerWidth,
  hideTabs: true
};

const parameters = {
  embed: 'y',
  showVizHome: 'no',
  host_url: 'https%3A%2F%2Fpublic.tableau.com%2F',
  embed_code_version: '3',
  tabs: 'no',
  toolbar: 'yes',
  animate_transition: 'yes',
  display_static_image: 'no',
  display_spinner: 'no',
  display_overlay: 'yes',
  display_count: 'yes',
  language: 'en-US',
  publish: 'yes',
  loadOrderID: '0'
};

function App() {
  return (
    <div className="App">
      <TableauReport
        url="https://public.tableau.com/views/project-bigdata-228/Dashboard1"
        options={options}
        parameters={parameters}
      />
    </div>
  );
}
export default withAuthenticator(App, {socialProviders: ["google"]});
