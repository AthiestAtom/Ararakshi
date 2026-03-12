import { useState, useCallback } from "react";
import { toast } from "sonner";
import { Brain, Shield, Cpu, ArrowDown, Sparkles, Activity, Users, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoBackground from "@/components/common/VideoBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const IndexFinal = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  
  // Research data
  const researchStats = [
    { 
      icon: <Users className="w-8 h-8" />,
      value: "941+", 
      label: "Sewer Worker Deaths Since 1993",
      color: "from-red-500 to-red-600"
    },
    { 
      icon: <Activity className="w-8 h-8" />,
      value: "6-9M", 
      label: "Manholes in India",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: <DollarSign className="w-8 h-8" />,
      value: "₹15,000+ Cr", 
      label: "Total Addressable Market",
      color: "from-green-500 to-green-600"
    },
    { 
      icon: <Shield className="w-8 h-8" />,
      value: "90-95%", 
      label: "Worker Risk Reduction",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Prediction",
      description: "Advanced machine learning models forecast sewer blockages 48 hours before occurrence with 82-90% accuracy.",
      gradient: "from-emerald-500 to-blue-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Worker Safety",
      description: "Real-time toxic gas monitoring and early-warning systems reduce fatality risk by 90-95%.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Economic Impact",
      description: "Municipal savings of ₹4-12 Cr per city annually through preventive maintenance.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const systemArchitecture = [
    {
      layer: "Layer 1",
      title: "Edge Hardware",
      description: "Manhole sensor nodes with multi-parameter sensing capabilities",
      items: ["Water level monitoring", "Flow/blockage patterns", "Toxic gases (H₂S, Methane)", "Temperature measurement"]
    },
    {
      layer: "Layer 2",
      title: "Edge AI Processing",
      description: "Local server-based intelligence for predictive analytics",
      items: ["Clog prediction algorithms", "Overflow probability forecasting", "Toxic gas risk detection", "Maintenance scheduling optimization"]
    },
    {
      layer: "Layer 3",
      title: "Municipal Command Platform",
      description: "City-scale visualization and decision support tools",
      items: ["Real-time sewer health dashboards", "Risk heatmaps and analytics", "Maintenance planning tools", "Worker safety alerts"]
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
    <div className="min-h-screen relative">
      <VideoBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-40 right-32 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute bottom-32 left-40 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-2000" />
            <div className="absolute bottom-20 right-20 w-36 h-36 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-3000" />
          </div>

          <div className="relative container mx-auto px-4 pt-20 pb-32 z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold mb-8 shadow-2xl">
                <Brain className="w-6 h-6" />
                AI-Driven Predictive Sewer Monitoring
                <Sparkles className="w-6 h-6" />
              </div>

              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-2xl">
                ARARAKSHI
                <br />
                <span className="text-5xl sm:text-6xl lg:text-7xl text-emerald-100">Smart Infrastructure</span>
              </h1>

              <p className="text-2xl text-white/95 mt-8 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                Transforming reactive sewer maintenance into predictive infrastructure management across India's 6-9 million manholes.
              </p>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {researchStats.map((stat, index) => (
                  <Card key={index} className="bg-white/25 backdrop-blur-md border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300">
                    <CardContent className="text-center p-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 text-white shadow-lg`}>
                        {stat.icon}
                      </div>
                      <div className="font-bold text-white text-2xl mb-2">{stat.value}</div>
                      <div className="text-emerald-100 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={() => document.getElementById('ai-demo')?.scrollIntoView({behavior: 'smooth'})}
                  className="inline-flex items-center gap-4 mt-16 px-12 py-6 bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 text-xl hover:from-emerald-300 hover:to-teal-300"
                >
                  Explore Technology
                  <ArrowDown className="w-6 h-6 animate-bounce" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Why Choose ARARAKSHI?
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Our AI-powered platform makes sewer management predictive, safe, and economically efficient
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="font-display text-2xl font-bold text-gray-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Demo Section */}
        <section id="ai-demo" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  AI Prediction Demo
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  Experience our predictive AI analysis system
                </p>
              </div>

              <Card className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <CardContent className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-6 mx-auto">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">
                    {isAnalyzing ? "Analyzing..." : "AI Analysis Ready"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {isAnalyzing 
                      ? "Processing sewer data patterns and generating predictive insights..." 
                      : "Click below to simulate AI-powered sewer analysis and prediction"
                    }
                  </p>
                </CardContent>

                {analysisResult && (
                  <CardContent className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{analysisResult.clogProbability}%</div>
                      <div className="text-sm text-gray-600">Clog Probability</div>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-xl">
                      <div className="text-3xl font-bold text-red-600 mb-2">{analysisResult.gasRisk}</div>
                      <div className="text-sm text-gray-600">Gas Risk Level</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{analysisResult.maintenancePriority}</div>
                      <div className="text-sm text-gray-600">Maintenance Priority</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-3xl font-bold text-green-600 mb-2">{analysisResult.predictionAccuracy}%</div>
                      <div className="text-sm text-gray-600">Prediction Accuracy</div>
                    </div>
                  </CardContent>
                )}

                <CardContent className="flex justify-center">
                  <Button 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent border-r-transparent animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Run AI Analysis
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  Three-Layer Architecture
                </h2>
                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                  Comprehensive system design for scalable sewer intelligence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {systemArchitecture.map((layer, index) => (
                  <Card key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl font-bold text-purple-800 mb-4">{layer.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-6">{layer.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {layer.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndexFinal;
