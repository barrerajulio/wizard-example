import React from "react";
import { Button } from "@material-ui/core";
import { Wizard } from "@barrerajulio/codebit.ui.wizard";

import Signup from "./templates/signup";

function App() {
  return (
    <Wizard open>
      <React.Fragment>
        <Wizard.Header>
          <h1>Header</h1>
        </Wizard.Header>
        <Wizard.Body>
          <Wizard.Content>
            <Signup type="email" />
          </Wizard.Content>
          <Wizard.Content>
            <Signup type="password" />
          </Wizard.Content>
        </Wizard.Body>
        <Wizard.Footer>
          {(context) => (
            <React.Fragment>
              <Button
                variant="contained"
                color="default"
                onClick={context.prevPage}
              >
                Previous
              </Button>
              <Button
                disabled={!context.canGoToNext}
                variant="contained"
                color="primary"
                onClick={context.shouldGoToNext}
              >
                Next
              </Button>
            </React.Fragment>
          )}
        </Wizard.Footer>
      </React.Fragment>
    </Wizard>
  );
}

export default App;
