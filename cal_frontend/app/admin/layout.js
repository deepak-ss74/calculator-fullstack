
import Navigation from "@/components/Navigation";

export const metadata ={
    title: "admin",
};

export default function AdminLayout({ children }) {
  return (<div>
    <Navigation/>
        {children}
      

  </div>
  
  );
}

