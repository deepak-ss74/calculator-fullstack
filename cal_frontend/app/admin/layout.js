
import AdminNavi from "@/components/AdminNavi";
export const metadata ={
    title: "admin",
};

export default function AdminLayout({ children }) {
  return (<>
  <AdminNavi/>
            <h1   >Arun Loves NA</h1>
        {children}
  </>
   
  );
}

