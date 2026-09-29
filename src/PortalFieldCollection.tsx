import { CloudField } from "../vendor/threeui-cloud-field/src/shaders/neuform-isolated/NeuformIsolatedEffects";
import "../vendor/threeui-cloud-field/src/shaders/threeui.css";

type Props = {
  variant: "cloud-field";
  hue: number;
  saturation: number;
  brightness: number;
};

export default function PortalFieldCollection({
  variant,
  hue,
  saturation,
  brightness,
}: Props) {
  if (variant !== "cloud-field") return null;
  return (
    <CloudField
      mode="dark"
      hue={hue}
      saturation={saturation}
      brightness={brightness}
      className="portal-field-cloud"
    />
  );
}
