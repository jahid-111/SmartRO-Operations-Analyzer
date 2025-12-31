import SpecificController from "./components/common/SpecificController";

import ErdPxIcon from "./components/svgComponents/ErdPxIcon";

import MMFVessel from "./components/svgComponents/MMFVessel";
import PipeLine from "./components/svgComponents/PipeLine";
import PumpIcon from "./components/svgComponents/PumpIcon";

export default function Page() {
  return (
    <>
      <MMFVessel />
      <ErdPxIcon active={true} size={150} />
      <PumpIcon active={true} size={100} />
      <SpecificController />

      <PipeLine length={300} diameter={10} reducerTo={0} active={true} />
    </>
  );
}
