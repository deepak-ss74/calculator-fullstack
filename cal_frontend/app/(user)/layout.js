import "../globals.css";

import Navigation from "@/components/Navigation";
import Calculator from "../../components/Calculator";
export default function UserLayout({ children }) {
  return (<>
  <Navigation/>
          {children}
          <Calculator/>
  </>
    
      
  );
}
