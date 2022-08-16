import { BrowserRouter } from "react-router-dom";

import { Navigation } from "@/routes/Navigation";

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}
