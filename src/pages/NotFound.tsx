import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <p className="text-gray-500 mb-8">The ARARAKSHI research page you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")} className="inline-flex items-center gap-2">
          Return to Research Paper
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
