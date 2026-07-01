import React, { useState } from "react";
import { Sun, Droplets, Info, Sparkles } from "lucide-react";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<"solar" | "water">("solar");

  // Solar States
  const [dailyWh, setDailyWh] = useState<number>(1640);
  const [regionHours, setRegionHours] = useState<string>("southwest");
  const [customHours, setCustomHours] = useState<number>(5.5);
  const [systemVoltage, setSystemVoltage] = useState<number>(24);
  const [useSafetyMargin, setSystemSafetyMargin] = useState<boolean>(true);

  // Water States
  const [roofArea, setRoofArea] = useState<number>(2000);
  const [annualRainfall, setAnnualRainfall] = useState<number>(30);
  const [roofType, setRoofType] = useState<string>("metal");

  // Region Hour Constants
  const regionMap: Record<string, number> = {
    southwest: 6.2,
    southeast: 5.0,
    northeast: 4.0,
    northwest: 3.5,
    mountain: 5.0,
    custom: 5.5,
  };

  const currentSunHours = regionHours === "custom" ? customHours : regionMap[regionHours];

  // Solar Calculations
  const calculatedSafetyFactor = useSafetyMargin ? 1.25 : 1.0;
  const rawPanelWattage = dailyWh / currentSunHours;
  const recommendedPanelWattage = Math.round(rawPanelWattage * calculatedSafetyFactor);
  
  // Recommended panel breakdown (assuming standard 320W panels)
  const panelsNeeded = Math.ceil(recommendedPanelWattage / 320);
  const finalSystemWattage = panelsNeeded * 320;

  // Controller Amps Formula: Panel Watts / Battery Voltage * 1.25 safety factor
  const controllerAmps = Math.round((finalSystemWattage / systemVoltage) * 1.25);

  // Water Calculations
  // Coefficients: Metal (0.95), Asphalt Shingles (0.80), Clay Tile (0.85)
  const efficiencyMap: Record<string, number> = {
    metal: 0.95,
    asphalt: 0.80,
    tile: 0.85,
  };
  const efficiency = efficiencyMap[roofType];
  const totalWaterHarvested = Math.round(roofArea * annualRainfall * 0.623 * efficiency);
  
  // Storage Tank sizing: Standard budget-balanced recommended tank is 6-8 weeks of average household collection
  const recommendedTankSize = Math.round((totalWaterHarvested / 12) * 1.5);

  return (
    <div 
      id="self-reliance-calculator" 
      className="bg-earth-100 rounded-3xl p-6 md:p-8 border border-earth-200 max-w-4xl mx-auto shadow-sm"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold text-forest-700 mb-2">
          <Sparkles className="w-3 h-3 text-accent-gold" /> Book-Based Interactive Estimator
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth-950 mb-2">
          Self-Reliance Sizing Calculator
        </h3>
        <p className="text-sm text-earth-800 max-w-lg mx-auto">
          Input your variables below to compute real-world off-grid specs using the official mathematical Blueprints outlined in the books.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex bg-white rounded-2xl p-1.5 border border-earth-200 mb-8 max-w-sm mx-auto">
        <button
          onClick={() => setActiveTab("solar")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "solar"
              ? "bg-forest-900 text-white shadow-sm"
              : "text-earth-800 hover:text-forest-900"
          }`}
        >
          <Sun className="w-4 h-4" />
          Solar Array Sizing
        </button>
        <button
          onClick={() => setActiveTab("water")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "water"
              ? "bg-forest-900 text-white shadow-sm"
              : "text-earth-800 hover:text-forest-900"
          }`}
        >
          <Droplets className="w-4 h-4" />
          Rainwater Harvesting
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Inputs */}
        <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-earth-200 space-y-6">
          {activeTab === "solar" ? (
            <>
              {/* Solar Inputs */}
              <div>
                <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                  Target Daily Power Needs (Watt-Hours)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="300"
                    max="6000"
                    step="50"
                    value={dailyWh}
                    onChange={(e) => setDailyWh(parseInt(e.target.value))}
                    className="flex-1 accent-forest-700 h-1.5 bg-earth-200 rounded-lg cursor-pointer"
                  />
                  <span className="w-20 text-right font-mono text-sm font-bold bg-earth-100 py-1.5 px-2.5 rounded-lg border border-earth-200 text-earth-950">
                    {dailyWh}Wh
                  </span>
                </div>
                <p className="text-[10px] text-earth-800 mt-1.5 flex items-center gap-1">
                  <Info className="w-3 h-3 text-forest-700" />
                  Average off-grid cabin load (LED lights, laptop, fridge) is ~1,640Wh.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                  Your Location / Sun Hours
                </label>
                <select
                  value={regionHours}
                  onChange={(e) => setRegionHours(e.target.value)}
                  className="w-full bg-earth-50 border border-earth-200 text-sm rounded-xl p-3 text-earth-950 font-medium focus:ring-1 focus:ring-forest-600 focus:outline-none"
                >
                  <option value="southwest">Southwest US (Arizona, Nevada) ~ 6.2 hours</option>
                  <option value="southeast">Southeast US (Florida, Texas) ~ 5.0 hours</option>
                  <option value="northeast">Northeast US (New York, Maine) ~ 4.0 hours</option>
                  <option value="northwest">Pacific Northwest (Oregon, WA) ~ 3.5 hours</option>
                  <option value="mountain">Mountain States (Colorado, Utah) ~ 5.0 hours</option>
                  <option value="custom">Custom Solar Window</option>
                </select>
              </div>

              {regionHours === "custom" && (
                <div>
                  <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                    Custom Peak Sun Hours per Day
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1.0"
                      max="8.0"
                      step="0.1"
                      value={customHours}
                      onChange={(e) => setCustomHours(parseFloat(e.target.value))}
                      className="flex-1 accent-forest-700 h-1.5 bg-earth-200 rounded-lg cursor-pointer"
                    />
                    <span className="w-16 text-right font-mono text-sm font-bold bg-earth-100 py-1.5 px-2.5 rounded-lg border border-earth-200 text-earth-950">
                      {customHours} hrs
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                    System Voltage
                  </label>
                  <div className="flex gap-2">
                    {[12, 24, 48].map((volts) => (
                      <button
                        key={volts}
                        onClick={() => setSystemVoltage(volts)}
                        className={`flex-1 py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                          systemVoltage === volts
                            ? "bg-forest-100 text-forest-900 border-forest-600"
                            : "bg-white text-earth-800 border-earth-200 hover:bg-earth-50"
                        }`}
                      >
                        {volts}V
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                    25% Winter Safety margin
                  </label>
                  <button
                    onClick={() => setSystemSafetyMargin(!useSafetyMargin)}
                    className={`w-full py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                      useSafetyMargin
                        ? "bg-forest-100 text-forest-900 border-forest-600"
                        : "bg-white text-earth-800 border-earth-200 hover:bg-earth-50"
                    }`}
                  >
                    {useSafetyMargin ? "Active (Highly Advised)" : "Disabled"}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Rainwater Inputs */}
              <div>
                <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                  Roof Footprint Area (Sq. Ft.)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={roofArea}
                    onChange={(e) => setRoofArea(parseInt(e.target.value))}
                    className="flex-1 accent-forest-700 h-1.5 bg-earth-200 rounded-lg cursor-pointer"
                  />
                  <span className="w-24 text-right font-mono text-sm font-bold bg-earth-100 py-1.5 px-2.5 rounded-lg border border-earth-200 text-earth-950">
                    {roofArea} sq ft
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                  Average Annual Rainfall (Inches)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="5"
                    max="120"
                    step="1"
                    value={annualRainfall}
                    onChange={(e) => setAnnualRainfall(parseInt(e.target.value))}
                    className="flex-1 accent-forest-700 h-1.5 bg-earth-200 rounded-lg cursor-pointer"
                  />
                  <span className="w-16 text-right font-mono text-sm font-bold bg-earth-100 py-1.5 px-2.5 rounded-lg border border-earth-200 text-earth-950">
                    {annualRainfall}&quot;
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-earth-800 uppercase tracking-wider mb-2">
                  Roof Material (Collection Efficiency)
                </label>
                <select
                  value={roofType}
                  onChange={(e) => setRoofType(e.target.value)}
                  className="w-full bg-earth-50 border border-earth-200 text-sm rounded-xl p-3 text-earth-950 font-medium focus:ring-1 focus:ring-forest-600 focus:outline-none"
                >
                  <option value="metal">Metal Roofing (95% collection yield)</option>
                  <option value="tile">Clay/Concrete Tile (85% collection yield)</option>
                  <option value="asphalt">Asphalt Shingles (80% collection yield)</option>
                </select>
                <p className="text-[10px] text-earth-800 mt-2 flex items-center gap-1">
                  <Info className="w-3 h-3 text-forest-700" />
                  Metal is the gold-standard champion for clean, chemical-free harvesting.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Right Column: Dynamic Outputs */}
        <div className="md:col-span-5 flex flex-col h-full justify-between gap-6">
          <div className="bg-forest-900 text-white rounded-2xl p-6 border border-forest-950 shadow-inner flex flex-col justify-between flex-1">
            {activeTab === "solar" ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-forest-100 opacity-80 mb-1">
                    Required Panel Output
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-mono font-bold text-accent-gold">
                      {recommendedPanelWattage}
                    </span>
                    <span className="text-sm font-semibold opacity-90">Watts</span>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Daily Sun Hours:</span>
                    <span className="font-mono font-semibold">{currentSunHours} hrs</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Sizing safety margin:</span>
                    <span className="font-mono font-semibold">{useSafetyMargin ? "1.25x (Winter Mode)" : "1.0x (Raw)"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Recommended Array:</span>
                    <span className="font-sans font-bold text-accent-gold text-right">
                      {panelsNeeded} × 320W Panels
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Total installed power:</span>
                    <span className="font-mono font-semibold">{finalSystemWattage}W</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/5">
                    <span className="text-forest-100 opacity-85">Charge Controller size:</span>
                    <span className="font-sans font-bold text-accent-gold text-right bg-white/10 px-2.5 py-0.5 rounded-md">
                      {controllerAmps}A MPPT / PWM
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-forest-100 opacity-80 mb-1">
                    Annual Harvest Potential
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-mono font-bold text-accent-gold">
                      {totalWaterHarvested.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold opacity-90">Gallons / Yr</span>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Average Monthly Yield:</span>
                    <span className="font-mono font-semibold">
                      {Math.round(totalWaterHarvested / 12).toLocaleString()} gal
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Roof runoff efficiency:</span>
                    <span className="font-mono font-semibold">{Math.round(efficiency * 100)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-forest-100 opacity-85">Rainfall multiplier:</span>
                    <span className="font-mono font-semibold text-right">0.623 gal/sqft/in</span>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div className="bg-white/5 rounded-xl p-3 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold block">
                      Recommended Storage Capacity
                    </span>
                    <p className="text-xs leading-relaxed opacity-95">
                      Based on standard 6-8 week safety margins, install a reservoir of at least{" "}
                      <strong className="text-accent-gold font-mono text-sm block mt-1">
                        {recommendedTankSize.toLocaleString()} Gallons
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-4 border border-earth-200 text-xs text-earth-800 leading-relaxed flex items-start gap-2.5">
            <Info className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-earth-950 font-semibold block mb-0.5">Need full blueprints?</strong>
              Calculations are derived directly from the diagnostic methodologies detailed inside the guides. Pick up the corresponding volume to master total grid-free independence.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
