import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert, Cpu, Activity, Database, RefreshCw, BarChart2, Radio } from "lucide-react";

export const Architecture = () => {
  const [trafficRate, setTrafficRate] = useState(250);
  const [isTunnelSecure, setIsTunnelSecure] = useState(true);
  const [isRedisActive, setIsRedisActive] = useState(true);
  const [activeNodeCount, setActiveNodeCount] = useState(8);
  const [telemetryLogs, setTelemetryLogs] = useState([
    "SYS_INIT::COGNITIVE_GRID_LOADED",
    "NODE_HEALTH::ALL_SYSTEMS_OPERATIONAL"
  ]);

  // Handle live logs generation based on traffic rate slider
  useEffect(() => {
    const logInterval = setInterval(() => {
      const ping = Math.floor(Math.random() * 15) + 5;
      const load = (trafficRate * 0.8 + Math.random() * 40).toFixed(1);
      const randomLog = `STREAM_INGEST::LOAD::${load}req/s::LATENCY::${ping}ms::REDIS_HIT::${isRedisActive ? "1" : "0"}`;
      
      setTelemetryLogs((prev) => {
        const next = [...prev, randomLog];
        if (next.length > 8) next.shift(); // keep it neat
        return next;
      });
    }, Math.max(100, 2000 - trafficRate * 1.8));

    return () => clearInterval(logInterval);
  }, [trafficRate, isRedisActive]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-mono px-4 py-24 flex flex-col justify-between">
      
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Glow widgets */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 space-y-12">
        
        {/* Navigation back and header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-border/60 pb-8 text-left">
          <div className="space-y-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-2 font-bold uppercase tracking-wider"
            >
              <ArrowLeft size={12} /> BACK_TO_DOCK
            </Link>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-none">
              Systems <span className="text-shimmer font-black">HUD Explorer</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              Interactive telemetry control bridge. Adjust sliders to scale simulated workloads and test runtime resiliency levels.
            </p>
          </div>
          
          <div className="flex gap-3 border border-border/80 bg-secondary/15 p-4 rounded-md text-[10px]">
            <div>
              <span className="text-muted-foreground uppercase block">ENGINE_CORE</span>
              <span className="font-bold text-foreground">ANALYTIC_ORBIT_v2.0</span>
            </div>
          </div>
        </div>

        {/* Live telemetry sandbox grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Telemetry controller panel (Col 7) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-md border border-border/80 space-y-8 text-left">
            <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold border-b border-border/60 pb-3 flex items-center gap-2">
              <Cpu size={14} className="text-primary animate-pulse" />
              TELEMETRY_CONTROL_UNIT
            </div>

            {/* Slider 1: Traffic Frequency */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">TRAFFIC FREQUENCY / INGEST RATE</span>
                <span className="font-bold text-primary">{trafficRate} Hz</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                value={trafficRate}
                onChange={(e) => setTrafficRate(Number(e.target.value))}
                className="w-full h-1 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[9px] text-muted-foreground">
                <span>MIN: 50 Hz</span>
                <span>MAX: 1000 Hz</span>
              </div>
            </div>

            {/* Config controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/40">
              
              {/* SSL Security switch */}
              <div className="space-y-2 text-xs">
                <span className="text-muted-foreground block">SECURE SOCKET (TLS 1.3)</span>
                <button
                  onClick={() => setIsTunnelSecure((prev) => !prev)}
                  className={`w-full py-2.5 rounded font-bold uppercase tracking-wider text-[10px] border transition-all duration-300 ${
                    isTunnelSecure
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
                      : "bg-rose-500/10 text-rose-500 border-rose-500/30"
                  }`}
                >
                  {isTunnelSecure ? "TUNNEL: SHIELDED" : "TUNNEL: DEGRADED"}
                </button>
              </div>

              {/* Redis caching switch */}
              <div className="space-y-2 text-xs">
                <span className="text-muted-foreground block">REDIS IN-MEMORY CACHE</span>
                <button
                  onClick={() => setIsRedisActive((prev) => !prev)}
                  className={`w-full py-2.5 rounded font-bold uppercase tracking-wider text-[10px] border transition-all duration-300 ${
                    isRedisActive
                      ? "bg-primary/10 text-primary border-primary/30"
                      : "bg-secondary/40 text-muted-foreground border-border"
                  }`}
                >
                  {isRedisActive ? "CACHE: ENABLED" : "CACHE: BYPASSED"}
                </button>
              </div>

            </div>

            {/* Live Stats Gauge Odomenter Widgets */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40 font-mono text-center">
              <div className="bg-secondary/15 p-4 rounded border border-border/80">
                <span className="text-[9px] text-muted-foreground uppercase block">RTT_LATENCY</span>
                <span className="text-xl font-bold text-foreground">
                  {isRedisActive ? (10 + trafficRate % 12) : (52 + trafficRate % 45)}ms
                </span>
              </div>
              <div className="bg-secondary/15 p-4 rounded border border-border/80">
                <span className="text-[9px] text-muted-foreground uppercase block">CPU_TEMP</span>
                <span className="text-xl font-bold text-foreground">
                  {(42 + trafficRate * 0.03).toFixed(1)}°C
                </span>
              </div>
              <div className="bg-secondary/15 p-4 rounded border border-border/80">
                <span className="text-[9px] text-muted-foreground uppercase block">FAIL_RATE</span>
                <span className="text-xl font-bold text-emerald-500">
                  {isTunnelSecure ? "0.00%" : "2.44%"}
                </span>
              </div>
            </div>

          </div>

          {/* Telemetry live data feed (Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Live terminal stream card */}
            <div className="flex-grow flex flex-col justify-between bg-black border border-primary/20 rounded-md p-6 font-mono text-[10px] sm:text-xs text-primary space-y-4 text-left min-h-[300px] shadow-md relative overflow-hidden">
              <div className="space-y-3 relative z-10">
                <div className="text-[9px] text-primary/40 uppercase tracking-widest border-b border-primary/10 pb-2 mb-2 font-bold flex justify-between">
                  <span>LIVE_TELEMETRY_BUFF [SSL//TLS]</span>
                  <span className="animate-pulse text-primary-400">● STEAM_ACTIVE</span>
                </div>
                
                {telemetryLogs.map((log, index) => (
                  <div key={index} className="flex items-start gap-1.5 leading-relaxed font-semibold">
                    <span className="text-primary/30">&gt;</span>
                    <span className="break-all">{log}</span>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div className="border-t border-primary/10 pt-3 text-[9px] text-primary/40 uppercase tracking-widest flex justify-between relative z-10">
                <span>BUFFER_RATE: {trafficRate} Hz</span>
                <span>STATUS::OK</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Decorative center radial glow */}
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    </div>
  );
};
