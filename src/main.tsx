import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <IntlProvider locale="fr" messages={localeConfig.fr}> */}
      {/* <Provider store={store}> */}
        <BrowserRouter>
          {/* <DndProvider backend={HTML5Backend}> */}
            <App />
          {/* </DndProvider> */}
        </BrowserRouter>
      {/* </Provider> */}
    {/* </IntlProvider> */}
  </React.StrictMode>
);
