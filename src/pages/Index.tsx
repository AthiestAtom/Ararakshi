import { useState, useCallback } from "react";
import { toast } from "sonner";
import { Brain, Shield, Cpu, ArrowDown, Sparkles, Activity, Users, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: 'linear-gradient(135deg, #10b981, #3b82f6, #a855f7)' }}>
      <div style={{ position: 'absolute', top: '80px', left: '80px', width: '128px', height: '128px', backgroundColor: 'rgba(250, 204, 21, 0.5)', borderRadius: '50%', filter: 'blur(24px)' }} />
      <div style={{ position: 'absolute', top: '160px', right: '128px', width: '192px', height: '192px', backgroundColor: 'rgba(239, 68, 68, 0.5)', borderRadius: '50%', filter: 'blur(24px)' }} />
      
      <div style={{ position: 'relative', zIndex: 10, padding: '80px 16px 128px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '96px', fontWeight: 'bold', color: 'white', textShadow: '0 8px 16px rgba(0,0,0,0.3)', fontFamily: 'Space Grotesk, sans-serif' }}>
            ARARAKSHI
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
