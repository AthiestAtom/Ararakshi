import { useState, useCallback } from "react";
import { toast } from "sonner";
import { Brain, Shield, Cpu, ArrowDown, Sparkles, Activity, Users, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const IndexWorking = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  
  // Research data
  const researchStats = [
    { 
      icon: <Users style={{ width: '32px', height: '32px' }} />,
      value: "941+", 
      label: "Sewer Worker Deaths Since 1993",
      color: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    { 
      icon: <Activity style={{ width: '32px', height: '32px' }} />,
      value: "6-9M", 
      label: "Manholes in India",
      color: "linear-gradient(135deg, #3b82f6, #2563eb)"
    },
    { 
      icon: <DollarSign style={{ width: '32px', height: '32px' }} />,
      value: "₹15,000+ Cr", 
      label: "Total Addressable Market",
      color: "linear-gradient(135deg, #22c55e, #16a34a)"
    },
    { 
      icon: <Shield style={{ width: '32px', height: '32px' }} />,
      value: "90-95%", 
      label: "Worker Risk Reduction",
      color: "linear-gradient(135deg, #a855f7, #9333ea)"
    }
  ];

  const handleAnalyze = useCallback(() => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResult({
        clogProbability: Math.floor(Math.random() * 30) + 10,
        gasRisk: Math.random() > 0.5 ? "High" : "Low",
        maintenancePriority: Math.random() > 0.7 ? "Urgent" : "Scheduled",
        predictionAccuracy: Math.floor(Math.random() * 15) + 75
      });
      setIsAnalyzing(false);
      toast.success("AI analysis complete! System predictions generated.");
    }, 2000);
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Background */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(135deg, #10b981, #3b82f6, #a855f7)',
        zIndex: -1 
      }}>
        <div style={{ position: 'absolute', top: '80px', left: '80px', width: '128px', height: '128px', backgroundColor: 'rgba(250, 204, 21, 0.2)', borderRadius: '50%', filter: 'blur(24px)' }} />
        <div style={{ position: 'absolute', top: '160px', right: '128px', width: '192px', height: '192px', backgroundColor: 'rgba(20, 184, 129, 0.2)', borderRadius: '50%', filter: 'blur(24px)' }} />
        <div style={{ position: 'absolute', bottom: '128px', left: '160px', width: '160px', height: '160px', backgroundColor: 'rgba(6, 182, 212, 0.2)', borderRadius: '50%', filter: 'blur(24px)' }} />
        <div style={{ position: 'absolute', bottom: '80px', right: '80px', width: '144px', height: '144px', backgroundColor: 'rgba(134, 239, 172, 0.2)', borderRadius: '50%', filter: 'blur(24px)' }} />
      </div>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '80px 16px 128px', zIndex: 10 }}>
            <div style={{ maxWidth: '1024px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '16px 32px', 
                borderRadius: '9999px', 
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                backdropFilter: 'blur(12px)', 
                border: '1px solid rgba(255, 255, 255, 0.3)', 
                color: 'white', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                marginBottom: '32px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}>
                <Brain style={{ width: '24px', height: '24px' }} />
                AI-Driven Predictive Sewer Monitoring
                <Sparkles style={{ width: '24px', height: '24px' }} />
              </div>

              <h1 style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '96px', 
                fontWeight: 'bold', 
                color: 'white', 
                lineHeight: '1.1', 
                marginBottom: '32px', 
                textShadow: '0 8px 16px rgba(0,0,0,0.3)'
              }}>
                ARARAKSHI
                <br />
                <span style={{ fontSize: '80px', color: '#d1fae5' }}>Smart Infrastructure</span>
              </h1>

              <p style={{ 
                fontSize: '24px', 
                color: 'rgba(255, 255, 255, 0.95)', 
                marginTop: '32px', 
                maxWidth: '896px', 
                margin: '32px auto 0', 
                lineHeight: '1.6', 
                fontWeight: '500',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}>
                Transforming reactive sewer maintenance into predictive infrastructure management across India's 6-9 million manholes.
              </p>

              {/* Stats Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '64px' }}>
                {researchStats.map((stat, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.25)', 
                    backdropFilter: 'blur(12px)', 
                    border: '1px solid rgba(255, 255, 255, 0.3)', 
                    borderRadius: '16px', 
                    padding: '24px', 
                    textAlign: 'center',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '16px', 
                      background: stat.color, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginBottom: '16px', 
                      color: 'white',
                      margin: '0 auto 16px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }}>
                      {stat.icon}
                    </div>
                    <div style={{ fontWeight: 'bold', color: 'white', fontSize: '24px', marginBottom: '8px' }}>{stat.value}</div>
                    <div style={{ color: '#d1fae5', fontSize: '14px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
                <button
                  onClick={() => document.getElementById('ai-demo')?.scrollIntoView({behavior: 'smooth'})}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '24px 48px',
                    background: 'linear-gradient(135deg, #34d399, #14b8a6)',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    fontSize: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  Explore Technology
                  <ArrowDown style={{ width: '24px', height: '24px', animation: 'bounce 1s infinite' }} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Demo Section */}
        <section id="ai-demo" style={{ padding: '96px 0', background: 'linear-gradient(135deg, #f9fafb, #eff6ff)' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '48px', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                AI Prediction Demo
              </h2>
              <p style={{ fontSize: '20px', color: '#4b5563', fontWeight: '300' }}>
                Experience our predictive AI analysis system
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '24px', 
              padding: '32px', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #dbeafe'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '24px', 
                  margin: '0 auto 24px'
                }}>
                  <Cpu style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h3 style={{ 
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '24px', 
                  fontWeight: 'bold', 
                  color: '#1f2937', 
                  marginBottom: '16px'
                }}>
                  {isAnalyzing ? "Analyzing..." : "AI Analysis Ready"}
                </h3>
                <p style={{ color: '#4b5563', marginBottom: '24px' }}>
                  {isAnalyzing 
                    ? "Processing sewer data patterns and generating predictive insights..." 
                    : "Click below to simulate AI-powered sewer analysis and prediction"
                  }
                </p>
              </div>

              {analysisResult && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#eff6ff', borderRadius: '12px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' }}>{analysisResult.clogProbability}%</div>
                    <div style={{ fontSize: '14px', color: '#4b5563' }}>Clog Probability</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#fef2f2', borderRadius: '12px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc2626', marginBottom: '8px' }}>{analysisResult.gasRisk}</div>
                    <div style={{ fontSize: '14px', color: '#4b5563' }}>Gas Risk Level</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#faf5ff', borderRadius: '12px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#7c3aed', marginBottom: '8px' }}>{analysisResult.maintenancePriority}</div>
                    <div style={{ fontSize: '14px', color: '#4b5563' }}>Maintenance Priority</div>
                  </div>
                  <div style={{ textAlign: 'center', padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '12px' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginBottom: '8px' }}>{analysisResult.predictionAccuracy}%</div>
                    <div style={{ fontSize: '14px', color: '#4b5563' }}>Prediction Accuracy</div>
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    fontSize: '18px',
                    border: 'none',
                    cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                    opacity: isAnalyzing ? 0.5 : 1,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (!isAnalyzing) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {isAnalyzing ? (
                    <>
                      <div style={{ 
                        width: '20px', 
                        height: '20px', 
                        border: '2px solid white', 
                        borderTop: '2px solid transparent', 
                        borderRight: '2px solid transparent', 
                        borderRadius: '50%', 
                        animation: 'spin 1s linear infinite' 
                      }} />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap style={{ width: '20px', height: '20px' }} />
                      Run AI Analysis
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); }
          50% { transform: translateY(0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default IndexWorking;
