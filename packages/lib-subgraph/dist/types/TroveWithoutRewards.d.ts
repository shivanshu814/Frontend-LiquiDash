import { TroveStatus } from "./globalTypes";
export interface TroveWithoutRewards_user_trove_owner {
    __typename: "User";
    /**
     * User's Ethereum address as a hex-string
     */
    id: string;
}
export interface TroveWithoutRewards_user_trove {
    __typename: "Trove";
    /**
     * Owner's ID + '-' + an incremented integer
     */
    id: string;
    owner: TroveWithoutRewards_user_trove_owner;
    status: TroveStatus;
    rawCollateral: any;
    rawDebt: any;
    rawStake: any;
    /**
     * The value of total redistributed per-stake collateral the last time rewards were applied
     */
    rawSnapshotOfTotalRedistributedCollateral: any;
    /**
     * The value of total redistributed per-stake debt the last time rewards were applied
     */
    rawSnapshotOfTotalRedistributedDebt: any;
}
export interface TroveWithoutRewards_user {
    __typename: "User";
    /**
     * User's Ethereum address as a hex-string
     */
    id: string;
    trove: TroveWithoutRewards_user_trove | null;
}
export interface TroveWithoutRewards {
    user: TroveWithoutRewards_user | null;
}
export interface TroveWithoutRewardsVariables {
    address: string;
}
//# sourceMappingURL=TroveWithoutRewards.d.ts.map