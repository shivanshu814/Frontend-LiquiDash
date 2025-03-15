import { Decimal, Decimalish } from "@liquity/lib-base";
import { InfoIcon } from "../../InfoIcon";
import * as l from "../lexicon";

type InfiniteEstimateProps = React.PropsWithChildren<{
  estimate: Decimalish;
}>;

export const InfiniteEstimate: React.FC<InfiniteEstimateProps> = ({ estimate, children }) => {
  if (estimate.toString() !== Decimal.INFINITY.toString()) {
    return <>{children ?? estimate.toString()}</>;
  }

  return (
    <>
      {Decimal.INFINITY.toString()}
      <InfoIcon size="xs" tooltip={l.INFINITE_ESTIMATION.description} />
      &nbsp;
    </>
  );
};
