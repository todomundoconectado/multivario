import { Routes, Route, Navigate } from "react-router-dom";
import LpDiamondLed from "./pages/par-lanterna-traseira-carreta-guerra-led-diamond";
import LpMotor from "./pages/lp-motor";
import LpBomba from "./pages/lp-bomba";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/par-lanterna-traseira-carreta-guerra-led-diamond" replace />} />
      <Route path="/par-lanterna-traseira-carreta-guerra-led-diamond" element={<LpDiamondLed />} />
      <Route path="/motor" element={<LpMotor />} />
      <Route path="/bomba" element={<LpBomba />} />
    </Routes>
  );
}
