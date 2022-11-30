import './App.css';
import TableauReport from "tableau-react";
import { withAuthenticator } from '@aws-amplify/ui-react'

// const options = {
  // device: "desktop",
  // height: placeholderDiv.offsetHeight,
  // width: placeholderDiv.offsetWidth
  // added interval support - an integer can be passed as milliseconds in the options object and refreshDataAsync() will refresh the data automatically on your preferred interval.
  // All other vizCreate options are supported here, too
  // They are listed here: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#vizcreateoptions_record
// };

function App() {
  return (
    <div className="App">
      <div>
        <h1 className = "ml"> Dashboard </h1>
        <TableauReport url="https://public.tableau.com/shared/K9MPQ6QNH?:display_count=n&:origin=viz_share_link" />
      </div>
    </div>
  );
}
export default withAuthenticator(App, {socialProviders: ["google"]});
