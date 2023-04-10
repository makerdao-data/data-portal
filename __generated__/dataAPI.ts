/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Action */
export interface Action {
  /** Id */
  id: number;
  /** Auction Id */
  auction_id?: number;
  /** Ilk */
  ilk: string;
  /** Debt */
  debt?: number;
  /** Available Collateral */
  available_collateral?: number;
  /** Sold Collateral */
  sold_collateral?: number;
  /** Recovered Debt */
  recovered_debt?: number;
  /** Round */
  round?: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Type */
  type: string;
  /** Max Collateral Amt */
  max_collateral_amt?: number;
  /** Max Price */
  max_price?: number;
  /** Collateral Price */
  collateral_price?: number;
  /** Osm Price */
  osm_price: number;
  /** Mkt Price */
  mkt_price?: number;
  /** Keeper */
  keeper?: string;
  /** Incentives */
  incentives?: number;
  /** Status */
  status?: number;
  /** Caller */
  caller?: string;
}

/** Auction */
export interface Auction {
  /**
   * Auction Id
   * @example 247
   */
  auction_id?: number;
  /**
   * Auction Start
   * @format date-time
   * @example "2021-10-27T12:22:00"
   */
  auction_start?: string;
  /**
   * Vault
   * unique vault identifier
   * @example "26232"
   */
  vault?: string;
  /**
   * Ilk
   * collateral type
   * @example "ETH-A"
   */
  ilk?: string;
  /**
   * Urn
   * vault urn handler
   * @example "0xc7dfb534e18e861a7d4e8d5175a928bffffba41c"
   */
  urn?: string;
  /**
   * Owner
   * owner wallet address
   * @example "0xfc983932ced719bd89bfdff7761d1d80ac92aa61"
   */
  owner?: string;
  /**
   * Debt
   * total debt (DAI)
   * @example 15055.884045
   */
  debt?: number;
  /**
   * Available Collateral
   * collateral available to withdraw (collateral)
   * @example 1.1832246260049066
   */
  available_collateral?: number;
  /**
   * Penalty
   * @example 0.13
   */
  penalty?: number;
  /**
   * Sold Collateral
   * @example 3.830865894914099
   */
  sold_collateral?: number;
  /**
   * Recovered Debt
   * @example 15256.627848484366
   */
  recovered_debt?: number;
  /**
   * Round
   * @example 1
   */
  round?: number;
  /**
   * Auction End
   * @format date-time
   * @example "2021-10-27T12:27:28"
   */
  auction_end?: string;
  /**
   * Finished
   * @example 1
   */
  finished?: number;
}

/** BalanceHistory */
export interface BalanceHistory {
  /**
   * Date
   * @format date
   */
  date: string;
  /** Address */
  address: string;
  /** Raw Balance */
  raw_balance: number;
  /** Balance */
  balance: number;
}

/** Bark */
export interface Bark {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash?: string;
  /** Urn */
  urn?: string;
  /** Vault */
  vault?: string;
  /** Owner */
  owner?: string;
  /** Collateral */
  collateral?: number;
  /** Debt */
  debt?: number;
  /** Penalty */
  penalty?: number;
  /** Ratio */
  ratio?: number;
  /** Osm Price */
  osm_price?: number;
  /** Mkt Price */
  mkt_price?: number;
  /** Caller */
  caller?: string;
  /** Keeper */
  keeper?: string;
  /** Gas Used */
  gas_used?: number;
  /** Status */
  status?: number;
  /** Revert Reason */
  revert_reason?: string;
}

/** Block */
export interface Block {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Block Hash */
  block_hash: string;
  /** Miner */
  miner: string;
  /** Difficulty */
  difficulty: number;
  /** Size */
  size: number;
  /** Extra Data */
  extra_data: string;
  /** Gas Limit */
  gas_limit: number;
  /** Gas Used */
  gas_used: number;
  /** Tx Count */
  tx_count: number;
}

/** Body_get_access_token_v1_login_access_token_post */
export interface BodyGetAccessTokenV1LoginAccessTokenPost {
  /**
   * Grant Type
   * @pattern password
   */
  grant_type?: string;
  /** Username */
  username: string;
  /** Password */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string;
  /** Client Secret */
  client_secret?: string;
}

/** Body_register_user_v1_users_register_post */
export interface BodyRegisterUserV1UsersRegisterPost {
  /** Password */
  password: string;
  /** Username */
  username: string;
  /** Full Name */
  full_name?: string;
}

/** Bridge */
export interface Bridge {
  /** Escrow Locked */
  escrow_locked: number;
  /** Escrow Locked 7 */
  escrow_locked_7: number;
  /** Supply Circulating */
  supply_circulating: number;
  /** Supply Circulating 7 */
  supply_circulating_7: number;
  /** Supply And Escrow Df */
  supply_and_escrow_df: Record<string, any>;
  /** Escrow Locked Supply Circulating Check */
  escrow_locked_supply_circulating_check: boolean;
  /** L1 Total Inflows */
  l1_total_inflows: number;
  /** L1 Total Outflows */
  l1_total_outflows: number;
  /** L2 Total Inflows */
  l2_total_inflows: number;
  /** L2 Total Outflows */
  l2_total_outflows: number;
  /** L1 Weekly Inflows */
  l1_weekly_inflows: number;
  /** L1 Weekly Outflows */
  l1_weekly_outflows: number;
  /** L1 Weekly Inflows 2 */
  l1_weekly_inflows_2: number;
  /** L1 Weekly Outflows 2 */
  l1_weekly_outflows_2: number;
  /** L1 Weekly Inflows Outflows Balance */
  l1_weekly_inflows_outflows_balance: number;
  /** L2 Weekly Inflows */
  l2_weekly_inflows: number;
  /** L2 Weekly Outflows */
  l2_weekly_outflows: number;
  /** L2 Weekly Inflows 2 */
  l2_weekly_inflows_2: number;
  /** L2 Weekly Outflows 2 */
  l2_weekly_outflows_2: number;
  /** L2 Weekly Inflows Outflows Balance */
  l2_weekly_inflows_outflows_balance: number;
  /** L2 Weekly Transfers Volume */
  l2_weekly_transfers_volume: number;
  /** L2 Weekly Transfers Count */
  l2_weekly_transfers_count: number;
  /** L2 Weekly Transfers Volume 2 */
  l2_weekly_transfers_volume_2: number;
  /** L2 Weekly Transfers Count 2 */
  l2_weekly_transfers_count_2: number;
  /** Unique Holders */
  unique_holders: number;
  /** Unique Holders 7 */
  unique_holders_7: number;
  /** Average Dai Ownership */
  average_dai_ownership: number;
  /** Average Dai Ownership 7 */
  average_dai_ownership_7: number;
  /** Top 10 Holders */
  top_10_holders: Record<string, any>;
  /** Supply Pct Change */
  supply_pct_change: any[];
  /** Escrow Pct Change */
  escrow_pct_change: any[];
  /** Last Refresh */
  last_refresh: Record<string, any>;
  /** Dai Buckets */
  DAI_buckets: Record<string, any>;
  /** Flows */
  flows: any[];
  /** Weekly Teleport Share */
  weekly_teleport_share: number;
  /** Weekly Teleport Share 7 */
  weekly_teleport_share_7: number;
}

/** CurrentDelegates */
export interface CurrentDelegates {
  /** Name */
  name?: string;
  /** Type */
  type: string;
  /** Delegated Mkr */
  delegated_mkr: number;
  /** Percent */
  percent: number;
  /** Delegators */
  delegators: number;
  /** Latest Compensation */
  latest_compensation?: number;
  /** Active Contract */
  active_contract: string;
}

/** Delegate */
export interface Delegate {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Vote Delegate Proxy */
  vote_delegate_proxy: string;
  /** Vote Delegate */
  vote_delegate: string;
  /** Delegate */
  delegate: string;
  /** Type */
  type: string;
  /** Name */
  name?: string;
}

/**
 * DelegateType
 * An enumeration.
 */
export enum DelegateType {
  Recognized = 'recognized',
  Shadow = 'shadow'
}

/** DelegatesMonthlyCompensation */
export interface DelegatesMonthlyCompensation {
  /** Date */
  date: string;
  /** Amount */
  amount: number;
}

/** DelegatesSupport */
export interface DelegatesSupport {
  /** Vote Delegate */
  vote_delegate: string;
  /** Delegate */
  delegate?: string;
  /** Amount */
  amount: number;
  /** Last Block */
  last_block: number;
  /**
   * Last Timestamp
   * @format date-time
   */
  last_timestamp: string;
}

/** DelegationSummary */
export interface DelegationSummary {
  /** Delegator */
  delegator: string;
  /** Vote Delegate */
  vote_delegate: string;
  /** Delegate */
  delegate?: string;
  /** Type */
  type: string;
  /** Delegated Mkr */
  delegated_mkr: number;
}

/** Delegations */
export interface Delegations {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Log Index */
  log_index: number;
  /** Transaction Index */
  transaction_index: number;
  /** Vote Delegate */
  vote_delegate: string;
  /** Delegate */
  delegate?: string;
  /** Delegator */
  delegator: string;
  /** Operation */
  operation: string;
  /** Raw Amount */
  raw_amount: number;
  /** Amount */
  amount: number;
  /** Order Index */
  order_index: string;
}

/** Domains */
export interface Domains {
  /** Domains */
  domains: any[];
  /** Throughput */
  throughput: number;
  /** Utilization */
  utilization: number;
}

/** Executive */
export interface Executive {
  /**
   * Block
   * block id
   * @example 13656651
   */
  block: number;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /**
   * Chief
   * contract address of Ds-Chief
   * @example "0x8e2a84d6ade1e7fffee039a35ef5f19f13057152"
   */
  chief: string;
  /**
   * Executive
   * contract address of executive
   * @example "0xca6f79983bad5450a6257e20b6e0b766c3d0c654"
   */
  executive: string;
  /**
   * Dapproval
   * change in vote support
   * @example 500
   */
  dapproval: number;
  /**
   * Voter
   * wallet address of voter
   * @example "0x0bd9f5ff1d2c35bef94d7bed48d4fdeb9c261c97"
   */
  voter: string;
  /**
   * Proxy
   * contract address for Ds-Proxy
   * @example "0x429f3589dab474e72ca528a4d416bd7b95d2ae25"
   */
  proxy?: string;
  /**
   * Timestamp
   * datetime
   * @format date-time
   * @example "2017-12-18T04:35:41"
   */
  timestamp: string;
  /**
   * Operation
   * transaction type
   * @example "VOTE"
   */
  operation: string;
  /**
   * Hat
   * contract address of governing executive
   * @example "0xca6f79983bad5450a6257e20b6e0b766c3d0c654"
   */
  hat?: string;
}

/** ExecutivesList */
export interface ExecutivesList {
  /**
   * Title
   * block id
   * @example 13656651
   */
  title: string;
  /**
   * Spell
   * contract address
   * @example "0xeec1e1aef39309998d14615a177d989f37342cf1"
   */
  spell: string;
  /**
   * Timestamp
   * datetime
   * @format date-time
   * @example "2017-12-18T04:35:41"
   */
  timestamp?: string;
  /**
   * Impact
   * count of parameters affected by executive
   * @example 15
   */
  impact?: number;
}

/** ExecutivesSummary */
export interface ExecutivesSummary {
  /** Dssspell */
  dssspell: string;
  /** Title */
  title: string;
  /** Approval */
  approval?: number;
  /**
   * Hat Prospect Timestamp
   * @format date-time
   */
  hat_prospect_timestamp?: string;
  /** Hat Prospect Block */
  hat_prospect_block?: number;
  /**
   * Lift Timestamp
   * @format date-time
   */
  lift_timestamp?: string;
  /** Lift Block */
  lift_block?: number;
  /** Lift Tx Hash */
  lift_tx_hash?: string;
  /**
   * Cast Timestamp
   * @format date-time
   */
  cast_timestamp?: string;
  /** Cast Block */
  cast_block?: number;
  /** Cast Tx Hash */
  cast_tx_hash?: string;
}

/** ExperimentalCurrentVault */
export interface ExperimentalCurrentVault {
  /**
   * Vault
   * unique vault identifier
   * @example "26232"
   */
  vault: string;
  /**
   * Ilk
   * collateral type
   * @example "ETH-A"
   */
  ilk: string;
  /**
   * Collateral
   * collateral amount locked (collateral)
   * @example 7.869134
   */
  collateral: number;
  /**
   * Principal
   * principal debt without fees (DAI)
   * @example 15000
   */
  principal: number;
  /**
   * Paid Fees
   * already paid fees, not included in debt (DAI)
   * @example 1.440574
   */
  paid_fees: number;
  /**
   * Debt
   * total debt (DAI)
   * @example 15055.884045
   */
  debt: number;
  /**
   * Accrued Fees
   * accrued fees (DAI)
   * @example 55.8840450000007
   */
  accrued_fees: number;
  /** Collateralization */
  collateralization?: number;
  /**
   * Osm Price
   * Oracle Security Module collateral price (collateral/DAI)
   * @example 3265.23
   */
  osm_price: number;
  /**
   * Mkt Price
   * collateral market price (collateral/DAI)
   * @example 3276.596079732024
   */
  mkt_price?: number;
  /**
   * Ratio
   * minimum collateralization ratio
   * @example 1.45
   */
  ratio: number;
  /**
   * Liquidation Price
   * collateral liquidation price
   * @example 2774.2610387941036
   */
  liquidation_price?: number;
  /**
   * Available Debt
   * debt available to generate (DAI)
   * @example 2664.4831348758617
   */
  available_debt: number;
  /**
   * Available Collateral
   * collateral available to withdraw (collateral)
   * @example 1.1832246260049066
   */
  available_collateral: number;
  /**
   * Owner
   * owner wallet address
   * @example "0xfc983932ced719bd89bfdff7761d1d80ac92aa61"
   */
  owner?: string;
  /** Ds Proxy */
  ds_proxy?: string;
  /**
   * Urn
   * vault urn handler
   * @example "0xc7dfb534e18e861a7d4e8d5175a928bffffba41c"
   */
  urn: string;
  /**
   * Art
   * total art value
   * @example 1.4173688514666083e+22
   */
  art: number;
  /**
   * Block Created
   * vault's creation block
   * @example 13486542
   */
  block_created: number;
  /**
   * Time Created
   * vault's creation timestamp
   * @format date-time
   * @example "2021-10-25T12:17:41"
   */
  time_created: string;
  /**
   * Last Block
   * block id
   * @example 14537868
   */
  last_block: number;
  /**
   * Last Time
   * latest synced block timestamp
   * @format date-time
   * @example "2022-01-14T16:34:50"
   */
  last_time: string;
}

/** ExperimentalParameterEvent */
export interface ExperimentalParameterEvent {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Spell */
  spell: string;
  /** Parameter */
  parameter: string;
  /** Ilk */
  ilk?: string;
  /** From Value */
  from_value: number;
  /** To Value */
  to_value: number;
  /** Source Type */
  source_type?: string;
  /** Title */
  title?: string;
  /** Spell Impact */
  spell_impact: number;
}

/** ExperimentalVaultHistory */
export interface ExperimentalVaultHistory {
  /**
   * Order Index
   * @example "013656651_136_000_010_000"
   */
  order_index: string;
  /**
   * Block
   * block id
   * @example 13656651
   */
  block: number;
  /**
   * Timestamp
   * @format date-time
   * @example "2021-11-21T06:49:05"
   */
  timestamp: string;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /**
   * Vault
   * unique vault identifier
   * @example "26232"
   */
  vault: string;
  /**
   * Ilk
   * collateral type
   * @example "ETH-A"
   */
  ilk: string;
  /**
   * Operation
   * transaction type
   * @example "GENERATE"
   */
  operation: string;
  /**
   * Dcollateral
   * delta/change in collateral
   * @example 0.08
   */
  dcollateral: number;
  /**
   * Dprincipal
   * delta/change in principal
   * @example 0
   */
  dprincipal: number;
  /**
   * Dfees
   * delta/change in fees
   * @example 0
   */
  dfees: number;
  /**
   * Mkt Price
   * collateral market price (collateral/DAI)
   * @example 3276.596079732024
   */
  mkt_price?: number;
  /**
   * Osm Price
   * Oracle Security Module collateral price (collateral/DAI)
   * @example 3265.23
   */
  osm_price?: number;
  /**
   * Dart
   * delta/change in art
   * @example 0
   */
  dart: number;
  /**
   * Rate
   * @example 1.0580857164099792e+27
   */
  rate: number;
  /**
   * Ratio
   * minimum collateralization ratio
   * @example 1.45
   */
  ratio: number;
  /**
   * Urn
   * vault urn handler
   * @example "0xc7dfb534e18e861a7d4e8d5175a928bffffba41c"
   */
  urn: string;
  /** Ds Proxy */
  ds_proxy?: string;
  /** Owner */
  owner?: string;
}

/** Flap */
export interface Flap {
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Block */
  block: number;
  /** Tx Hash */
  tx_hash: string;
  /** Status */
  status: boolean;
  /** Order Inndex */
  order_inndex?: string;
  /** Action */
  action: string;
  /** Id */
  id: number;
  /** Lot */
  lot?: number;
  /** Bid */
  bid?: number;
  /** Guy */
  guy?: string;
  /** From Address */
  from_address: string;
  /** To Address */
  to_address: string;
}

/** GovDAITransfers */
export interface GovDAITransfers {
  /** Block */
  block: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Token */
  token: string;
  /** Sender */
  sender: string;
  /** Receiver */
  receiver: string;
  /** Amount */
  amount: number;
  /** Label */
  label: string;
  /** Code */
  code: string;
  /** Type */
  type: string;
  /** Flow */
  flow: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** Info */
export interface Info {
  /** Info */
  info: Record<string, any>;
}

/** LastBlock */
export interface LastBlock {
  /**
   * Last Block
   * block id
   * @example 14537868
   */
  last_block: number;
  /**
   * Delay
   * difference between tip of chain and the last_block
   * @example 84
   */
  delay?: number;
}

/** LastTime */
export interface LastTime {
  /**
   * Last Time
   * latest synced block timestamp
   * @format date-time
   * @example "2022-01-14T16:34:50"
   */
  last_time: string;
}

/** MultisigEvent */
export interface MultisigEvent {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Event Name */
  event_name: string;
  /** Event Signature */
  event_signature: string;
  /** Contract Address */
  contract_address: string;
  /** Parameters */
  parameters: Record<string, any>[];
  /** Label */
  label: string;
}

/**
 * Network
 * An enumeration.
 */
export enum Network {
  ETHEREUM = 'ETHEREUM'
}

/** Origin */
export interface Origin {
  /**
   * Vault
   * unique vault identifier
   * @example "26232"
   */
  vault: string;
  /**
   * Ilk
   * collateral type
   * @example "ETH-A"
   */
  ilk: string;
  /**
   * Timestamp
   * @format date-time
   * @example "2021-11-21T06:49:05"
   */
  timestamp: string;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /** Origin */
  origin: string;
  /** Wallet */
  wallet: string;
  /**
   * Owner
   * owner wallet address
   * @example "0xfc983932ced719bd89bfdff7761d1d80ac92aa61"
   */
  owner?: string;
}

/** Overview */
export interface Overview {
  /** Total Mkr Locked In Cheif */
  total_mkr_locked_in_cheif: number;
  /** Mkr Locked In Chief By Recognized */
  mkr_locked_in_chief_by_recognized: number;
  /** Mkr Locked In Chief By Shadow */
  mkr_locked_in_chief_by_shadow: number;
  /** Mkr Locked In Chief By Regular */
  mkr_locked_in_chief_by_regular: number;
  /** Unique Recognized */
  unique_recognized: number;
  /** Unique Shadow */
  unique_shadow: number;
  /** Unique Regular */
  unique_regular: number;
  /** Mkr Locked In Hat From Recognized */
  mkr_locked_in_hat_from_recognized: number;
  /** Mkr Locked In Hat From Shadow */
  mkr_locked_in_hat_from_shadow: number;
  /** Mkr Locked In Hat From Regular */
  mkr_locked_in_hat_from_regular: number;
  /** Mkr Locked In Governing Executive */
  mkr_locked_in_governing_executive: number;
  /** Avg Mkr Used In Polls */
  avg_mkr_used_in_polls: number;
  /** Avg Voters Count In Polls */
  avg_voters_count_in_polls: number;
  /** Exexutives Passed */
  exexutives_passed: any[];
  /** Exexutives Rejected */
  exexutives_rejected: any[];
  /** Executives */
  executives: Record<string, any>;
  /** Voters In Polls */
  voters_in_polls: Record<string, any>;
  /** Is Latest Executive Hat */
  is_latest_executive_hat: boolean;
}

/** Ownership */
export interface Ownership {
  /**
   * Vault
   * unique vault identifier
   * @example "26232"
   */
  vault: string;
  /** Owner */
  owner?: string;
  /** Ds Proxy */
  ds_proxy?: string;
  /** Urn */
  urn: string;
  /**
   * Ilk
   * collateral type
   * @example "ETH-A"
   */
  ilk: string;
  /** Origin */
  origin?: string;
}

/** ParameterSnapshot */
export interface ParameterSnapshot {
  /** Parameter */
  parameter: string;
  /** Ilk */
  ilk?: string;
  /** Value */
  value: number;
}

/** ParticipationCost */
export interface ParticipationCost {
  /** Poll Id */
  poll_id: number;
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Voter */
  voter: string;
  /** Recognized Delegate */
  recognized_delegate?: string;
  /** Gas Price */
  gas_price?: number;
  /** Gas Used */
  gas_used?: number;
  /** Max Priority Fee Per Gas */
  max_priority_fee_per_gas?: number;
  /** Base Fee Per Gas */
  base_fee_per_gas?: number;
  /** Eth Price Usd */
  eth_price_usd?: number;
  /** Tx Fee Eth */
  tx_fee_eth?: number;
  /** Tx Fee Usd */
  tx_fee_usd?: number;
}

/** PauseProxyTransfers */
export interface PauseProxyTransfers {
  /** Block */
  block: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Log Index */
  log_index: number;
  /** Tx Index */
  tx_index: number;
  /** Token */
  token: string;
  /** Sender */
  sender: string;
  /** Receiver */
  receiver: string;
  /** Amount Raw */
  amount_raw: number;
  /** Amount */
  amount: number;
  /** Order Index */
  order_index: string;
  /** Flow */
  flow: string;
}

/** Poll */
export interface Poll {
  /** Poll Id */
  poll_id: number;
  /** Title */
  title: string;
  /** Block Created */
  block_created: number;
  /**
   * Start Timestamp
   * @format date-time
   */
  start_timestamp: string;
  /** Block Ended */
  block_ended?: number;
  /**
   * End Timestamp
   * @format date-time
   */
  end_timestamp: string;
  /** Options */
  options: Record<string, any>;
  /** Results */
  results?: Record<string, any>;
  /** Winning Option */
  winning_option?: string;
  /** Winning Option Approval */
  winning_option_approval?: number;
  /** Winning Option Approval Percent */
  winning_option_approval_percent?: number;
  /** Discussion Link */
  discussion_link?: string;
  /** Victory Conditions */
  victory_conditions: any[];
  /** Slug */
  slug: string;
}

/** Proxy */
export interface Proxy {
  /** Block */
  block: number;
  /** Tx Hash */
  tx_hash: string;
  /** Voter */
  voter: string;
  /** Proxy */
  proxy: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Operation */
  operation: string;
}

/** Round */
export interface Round {
  /** Auction Id */
  auction_id?: number;
  /** Round */
  round?: number;
  /**
   * Round Start
   * @format date-time
   */
  round_start?: string;
  /** Initial Price */
  initial_price?: number;
  /** Debt */
  debt?: number;
  /** Available Collateral */
  available_collateral?: number;
  /** Sold Collateral */
  sold_collateral?: number;
  /** Recovered Debt */
  recovered_debt?: number;
  /** Keeper */
  keeper?: string;
  /** Incentives */
  incentives?: number;
  /** End Price */
  end_price?: number;
  /**
   * Round End
   * @format date-time
   */
  round_end?: string;
  /** Finished */
  finished?: number;
  /** Ilk */
  ilk?: string;
}

/** SpellSummary */
export interface SpellSummary {
  /** Spell */
  spell?: string;
  /** Source Type */
  source_type?: string;
  /** Title */
  title?: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Impact */
  impact?: number;
}

/** SpellsList */
export interface SpellsList {
  /** Spell */
  spell: string;
  /** Tx Hash */
  tx_hash: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp?: string;
  /** Impact */
  impact?: number;
}

/** Stake */
export interface Stake {
  /** Block */
  block: number;
  /** Tx Hash */
  tx_hash: string;
  /** Voter */
  voter: string;
  /** Proxy */
  proxy?: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Operation */
  operation: string;
  /** Dstake */
  dstake: number;
}

/** Summary */
export interface Summary {
  /** Supply Circulating */
  supply_circulating: Record<string, any>;
  /** Supply Circulating 7 */
  supply_circulating_7: Record<string, any>;
  /** L2 Weekly Transfers Volume */
  l2_weekly_transfers_volume: Record<string, any>;
  /** L2 Weekly Transfers Volume 2 */
  l2_weekly_transfers_volume_2: Record<string, any>;
  /** L2 Weekly Transfers Count */
  l2_weekly_transfers_count: Record<string, any>;
  /** L2 Weekly Transfers Count 2 */
  l2_weekly_transfers_count_2: Record<string, any>;
  /** Total Supply */
  total_supply: Record<string, any>;
  /** Total Escrow */
  total_escrow: Record<string, any>;
  /** Last Refresh */
  last_refresh: Record<string, any>;
  /** Teleport Domains */
  teleport_domains: Record<string, any>;
  /** Networks Transfer Volume */
  networks_transfer_volume: Record<string, any>;
  /** Networks Transfer Count */
  networks_transfer_count: Record<string, any>;
  /** Networks Avg Transfer */
  networks_avg_transfer: Record<string, any>;
  /** Bridges */
  bridges: Record<string, any>;
}

/** Support */
export interface Support {
  /**
   * Date
   * @format date
   */
  date: string;
  /** Type */
  type: string;
  /** Vote Delegate */
  vote_delegate: string;
  /** Delegate */
  delegate: string;
  /** Support */
  support: number;
}

/** TotalSupply */
export interface TotalSupply {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Network */
  network: string;
  /** Token */
  token: string;
  /** Raw Total Supply */
  raw_total_supply: number;
  /** Total Supply */
  total_supply: number;
}

/**
 * TotalSupplyToken
 * An enumeration.
 */
export enum TotalSupplyToken {
  DAI = 'DAI'
}

/** TransferHistory */
export interface TransferHistory {
  /** Block */
  block: number;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Sender */
  sender: string;
  /** Receiver */
  receiver: string;
  /** Amount */
  amount: number;
}

/** User */
export interface User {
  /** Username */
  username?: string;
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
  /**
   * Is Superuser
   * @default false
   */
  is_superuser?: boolean;
  /** Full Name */
  full_name?: string;
  /** Id */
  id?: number;
}

/** UserCreate */
export interface UserCreate {
  /** Username */
  username: string;
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
  /**
   * Is Superuser
   * @default false
   */
  is_superuser?: boolean;
  /** Full Name */
  full_name?: string;
  /** Password */
  password: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: string[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** VaultHistoryDaily */
export interface VaultHistoryDaily {
  /**
   * Day
   * @format date
   */
  day: string;
  /** Vault */
  vault: string;
  /** Ilk */
  ilk: string;
  /** Collateral Eod */
  collateral_eod: number;
  /** Principal Eod */
  principal_eod: number;
  /** Debt Eod */
  debt_eod: number;
  /** Fees Eod */
  fees_eod: number;
  /** Withdraw */
  withdraw: number;
  /** Deposit */
  deposit: number;
  /** Principal Generate */
  principal_generate: number;
  /** Principal Payback */
  principal_payback: number;
  /** Debt Generate */
  debt_generate: number;
  /** Debt Payback */
  debt_payback: number;
  /** Fees */
  fees: number;
}

/** VaultState */
export interface VaultState {
  /**
   * Vault
   * unique vault identifier
   * @example "26232"
   */
  vault: string;
  /**
   * Ilk
   * collateral type
   * @example "ETH-A"
   */
  ilk: string;
  /**
   * Collateral
   * collateral amount locked (collateral)
   * @example 7.869134
   */
  collateral: number;
  /**
   * Principal
   * principal debt without fees (DAI)
   * @example 15000
   */
  principal: number;
  /**
   * Paid Fees
   * already paid fees, not included in debt (DAI)
   * @example 1.440574
   */
  paid_fees: number;
  /**
   * Debt
   * total debt (DAI)
   * @example 15055.884045
   */
  debt: number;
  /**
   * Accrued Fees
   * accrued fees (DAI)
   * @example 55.8840450000007
   */
  accrued_fees: number;
  /**
   * Osm Price
   * Oracle Security Module collateral price (collateral/DAI)
   * @example 3265.23
   */
  osm_price: number;
  /**
   * Mkt Price
   * collateral market price (collateral/DAI)
   * @example 3276.596079732024
   */
  mkt_price?: number;
  /**
   * Ratio
   * minimum collateralization ratio
   * @example 1.45
   */
  ratio: number;
  /**
   * Liquidation Price
   * collateral liquidation price
   * @example 2774.2610387941036
   */
  liquidation_price?: number;
  /**
   * Available Debt
   * debt available to generate (DAI)
   * @example 2664.4831348758617
   */
  available_debt: number;
  /**
   * Available Collateral
   * collateral available to withdraw (collateral)
   * @example 1.1832246260049066
   */
  available_collateral: number;
  /**
   * Owner
   * owner wallet address
   * @example "0xfc983932ced719bd89bfdff7761d1d80ac92aa61"
   */
  owner?: string;
  /**
   * Urn
   * vault urn handler
   * @example "0xc7dfb534e18e861a7d4e8d5175a928bffffba41c"
   */
  urn: string;
  /**
   * Art
   * total art value
   * @example 1.4173688514666083e+22
   */
  art: number;
  /**
   * Block Created
   * vault's creation block
   * @example 13486542
   */
  block_created: number;
  /**
   * Time Created
   * vault's creation timestamp
   * @format date-time
   * @example "2021-10-25T12:17:41"
   */
  time_created: string;
}

/** VestBlow */
export interface VestBlow {
  /**
   * Block
   * block id
   * @example 13656651
   */
  block: number;
  /**
   * Timestamp
   * @format date-time
   * @example "2021-11-21T06:49:05"
   */
  timestamp: string;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /**
   * Token
   * abbreviated token name
   * @example "DAI"
   */
  token: string;
  /**
   * Sender
   * wallet returning funds, in most cases: CUs oprational wallet
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  sender: string;
  /**
   * Receiver
   * address of DssBlow contract
   * @example "0x0048fc4357db3c0f45adea433a07a20769ddb0cf"
   */
  receiver: string;
  /**
   * Amount
   * amount of returned funds
   * @example 28640.09
   */
  amount: number;
}

/** VestClaim */
export interface VestClaim {
  /**
   * Block
   * block id
   * @example 13656651
   */
  block: number;
  /**
   * Timestamp
   * @format date-time
   * @example "2021-11-21T06:49:05"
   */
  timestamp: string;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /**
   * Contract Address
   * token vesting smart contract
   * @example "0x2cc583c0aacdac9e23cb601fda8f1a0c56cdcb71"
   */
  contract_address: string;
  /**
   * Id
   * id of the vesting plan
   * @example 1
   */
  id: number;
  /**
   * Receiver
   * vesting plan beneficiary/recipient
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  receiver: string;
  /**
   * Token
   * abbreviated token name
   * @example "DAI"
   */
  token: string;
  /**
   * Raw Amount
   * token reward
   * @example 1
   */
  raw_amount: string;
  /**
   * Amount
   * token reward
   * @example 1
   */
  amount: number;
  /**
   * Executor
   * address that executed action
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  executor: string;
}

/** VestInit */
export interface VestInit {
  /**
   * Block
   * block id
   * @example 13656651
   */
  block: number;
  /**
   * Timestamp
   * @format date-time
   * @example "2021-11-21T06:49:05"
   */
  timestamp: string;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /**
   * Contract Address
   * token vesting smart contract
   * @example "0x2cc583c0aacdac9e23cb601fda8f1a0c56cdcb71"
   */
  contract_address: string;
  /**
   * Id
   * id of the vesting plan
   * @example 1
   */
  id: number;
  /**
   * Receiver
   * vesting plan beneficiary/recipient
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  receiver: string;
  /**
   * Vest Start
   * vesting plan start date
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  vest_start: string;
  /**
   * Cliff
   * end of cliff period, in which tokens are accrued but not payable
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  cliff: string;
  /**
   * Vest End
   * end of vesting plan
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  vest_end: string;
  /**
   * Token
   * abbreviated token name
   * @example "DAI"
   */
  token: string;
  /**
   * Manager
   * address of an authorized manager (this address has permission to remove the vesting plan when the contributor leaves the project)
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  manager: string;
  /**
   * Restricted
   * vesting restricted to the owner only
   * @example 0
   */
  restricted: boolean;
  /**
   * Reward Amount
   * token reward
   * @example 1
   */
  reward_amount: number;
  /**
   * Vest Claimed
   * tokens paid out of the vesting plan
   * @example 1
   */
  vest_claimed: number;
  /**
   * Accrued
   * claimable tokens to be paid ouf of the vesting plan
   * @example 1
   */
  accrued: number;
  /**
   * Unpaid
   * amount of accrued, vested, unpaid tokens
   * @example 1
   */
  unpaid: number;
  /**
   * Valid
   * vesting plan is valid and has not been claimed or yanked before the cliff
   * @example 1
   */
  valid: boolean;
  /**
   * Details
   * full set of vesting details
   */
  details: Record<string, any>;
}

/** VestYank */
export interface VestYank {
  /**
   * Block
   * block id
   * @example 13656651
   */
  block: number;
  /**
   * Timestamp
   * @format date-time
   * @example "2021-11-21T06:49:05"
   */
  timestamp: string;
  /**
   * Tx Hash
   * transaction hash/id
   * @example "0x339560202349c62cd7695dbf3da70c1f3beb102b027e75f40fbe6bf4290adb2c"
   */
  tx_hash: string;
  /**
   * Contract Address
   * token vesting smart contract
   * @example "0x2cc583c0aacdac9e23cb601fda8f1a0c56cdcb71"
   */
  contract_address: string;
  /**
   * Id
   * id of the vesting plan
   * @example 1
   */
  id: number;
  /**
   * Receiver
   * vesting plan beneficiary/recipient
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  receiver: string;
  /**
   * Vest Start
   * vesting plan start date
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  vest_start: string;
  /**
   * Cliff
   * end of cliff period, in which tokens are accrued but not payable
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  cliff: string;
  /**
   * Vest End
   * end of vesting plan
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  vest_end: string;
  /**
   * Token
   * abbreviated token name
   * @example "DAI"
   */
  token: string;
  /**
   * Manager
   * address of an authorized manager (this address has permission to remove the vesting plan when the contributor leaves the project)
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  manager: string;
  /**
   * Restricted
   * vesting restricted to the owner only
   * @example 0
   */
  restricted: boolean;
  /**
   * Reward Amount
   * token reward
   * @example 1
   */
  reward_amount: number;
  /**
   * Vest Claimed
   * tokens paid out of the vesting plan
   * @example 1
   */
  vest_claimed: number;
  /**
   * Accrued
   * claimable tokens to be paid ouf of the vesting plan
   * @example 1
   */
  accrued: number;
  /**
   * Unpaid
   * amount of accrued, vested, unpaid tokens
   * @example 1
   */
  unpaid: number;
  /**
   * Yanked
   * vesting plan cancellation datetime
   * @format date-time
   * @example "2022-11-01 22:00:00"
   */
  yanked: string;
  /**
   * Valid
   * vesting plan is valid and has not been claimed or yanked before the cliff
   * @example 1
   */
  valid: boolean;
  /**
   * Executor
   * address that executed action
   * @example "0x7327aed0ddf75391098e8753512d8aec8d740a1f"
   */
  executor: string;
  /**
   * Details
   * full set of vesting details
   */
  details: Record<string, any>;
}

/** Vote */
export interface Vote {
  /** Block */
  block: number;
  /** Tx Hash */
  tx_hash?: string;
  /** Poll */
  poll: string;
  /** Dapproval */
  dapproval: number;
  /** Voter */
  voter: string;
  /** Proxy */
  proxy?: string;
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Operation */
  operation: string;
}

/** Vote2 */
export interface Vote2 {
  /**
   * Timestamp
   * @format date-time
   */
  timestamp: string;
  /** Tx Hash */
  tx_hash: string;
  /** Network */
  network: string;
  /** Voter */
  voter: string;
  /** Proxy */
  proxy?: string;
  /** Delegate */
  delegate?: string;
  /** Type */
  type?: string;
  /** Name */
  name?: string;
  /** Poll Id */
  poll_id: number;
  /** Option */
  option: string;
  /** Operation */
  operation: string;
  /** Approval */
  approval: number;
}

/** Voter */
export interface Voter {
  /** Voter Address */
  voter_address: string;
  /** Type */
  type?: string;
  /** Voter Alias */
  voter_alias?: string;
  /** Stake */
  stake: number;
  /** Current Votes */
  current_votes: Record<string, any>[];
  /**
   * Since
   * @format date
   */
  since: string;
  /**
   * Last
   * @format date-time
   */
  last: string;
}

/** VotesSummary */
export interface VotesSummary {
  /** Date */
  date: string;
  /**
   * Regular
   * @default 0
   */
  regular?: number;
  /**
   * Shadow
   * @default 0
   */
  shadow?: number;
  /**
   * Recognized
   * @default 0
   */
  recognized?: number;
  /** Unique Voters */
  unique_voters: number;
}

/**
 * Order
 * An enumeration.
 */
export enum ApiApiV1EndpointsGovernanceOrder {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * Order
 * An enumeration.
 */
export enum ApiApiV1EndpointsParametersOrder {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * Order
 * An enumeration.
 */
export enum ApiApiV1EndpointsTokensOrder {
  Asc = 'asc',
  Desc = 'desc'
}

/**
 * Token
 * An enumeration.
 */
export enum ApiApiV1EndpointsTokensToken {
  DAI = 'DAI',
  MKR = 'MKR'
}

/** Token */
export interface SchemasTokensTokensToken {
  /** Access Token */
  access_token: string;
  /** Token Type */
  token_type: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {})
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body)
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data.data;
    });
  };
}

/**
 * @title Data API
 * @version 1.1.1
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 * @termsOfService https://pointheuristic.notion.site/Data-API-8b2b220902fe49bf8336f361c41375e1
 * @contact Data Insights Core Unit (https://data.makerdao.network/)
 *
 *
 *
 * #### License
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 * #### Copyrights
 * This documentation, the API, the data and all related code, documents, content and materials are © DAI Foundation.
 *
 *
 * # Overview
 *
 * The Data Insights core unit at MakerDAO puts to everyone's disposal a range of REST API endpoints across multiple domains.
 * This documentation provides an overview of the API design, methods, and supported use cases.
 *
 * Currently available domains are Governance, Vaults, and Liquidations (collateral auctions).
 * Soon we will include other domains, such as Debt & Surplus auctions, and Protocol Parameters. You can find out more in our [public roadmap](data.makerdao.network/roadmap).
 *
 *
 * ## API Endpoints
 *
 * The base path is https://data-api.makerdao.network
 *
 * All endpoints return `JSON` responses.
 *
 *
 * ## Responses
 *
 * Properly sent requests to any available endpoint will result in an HTTP 200 response containing a set of objects, which hopefully embodies a set of data that matches your request.
 *
 *
 * ## Our Commitment to the community
 *
 * ### Time delay
 * The data provided is not live to the latest block.
 *
 * Since the data is processed before it is made available via the API, the data is typically multiple blocks
 * behind the tip of the Ethereum blockchain. The delay also decreases the possiblity of data being changed after the fact, such as when there is a chain reorganization.
 * Please expect this delay to be around ~40 minutes unless stated otherwise.
 *
 * Users of the API can identify the latest block in the dataset using /last_block and should verify this against the current latest block via their preferred means (block explorer, node, etc.)
 * to understand how far behind the tip of the chain the data is.
 *
 * The API and underlying dataset and technology are in continuous development, therefore you can expect to experience bugs, errors, and partial or complete loss of service at any time.
 * We strive to correct any issues in the shortest amount of time possible but please be aware that delays can be significant as we our team is not built to run DevOps.
 * We appreciate any messages alerting us to issues.
 *
 * ### Communication
 * We aim to communicate any significant changes in the service.
 * Particularly, deprecation of existing servicess will be communicated to all current users of the service and be given enough time to adapt.
 * Addition of new features and other enhancing changes will be communicated through the website and quite likely in the MakerDAO forum.
 *
 * We will inform of any issues through several channels:
 * - [data.makerdao.network](https://data.makerdao.network/)
 * - email from api@data.makerdao.network
 *
 * ### Fair usage & Rate limit
 * We ask our users to take into account fair use of the API.
 * We have implemented a 100 hits per minute rate limit, if you're finding yourself being hampered by it, please get in touch with us.
 * In order to control costs while servicing as many users as possible, we will periodically evaluate the cost to serve on an individual basis and may need to take actions related to the abuse of service.
 *
 * # Authentication
 *
 * The first time using the service, you'll need to register as a user using `/v1/users/register`.
 *
 * After creating the user, login to get a bearer token using `/v1/login/access-token`.
 *
 * Please keep mind that the bearer tokens have a validity of 60 minutes, after which time you will need to re-generate it.
 *
 * To authorize the request, pass the access token as `Authorization` header value with `Bearer` prefix.
 *
 * ```
 * curl -X GET https://data-api.makerdao.network/v1/last_block -H 'Authorization: Bearer <access_token>'
 * ```
 *
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description OAuth2 compatible access token login using registered user credentials.
     *
     * @tags login
     * @name GetAccessTokenV1LoginAccessTokenPost
     * @summary Get Access Token
     * @request POST:/v1/login/access-token
     */
    getAccessTokenV1LoginAccessTokenPost: (
      data: BodyGetAccessTokenV1LoginAccessTokenPost,
      params: RequestParams = {}
    ) =>
      this.request<SchemasTokensTokensToken, HTTPValidationError>({
        path: `/v1/login/access-token`,
        method: 'POST',
        body: data,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params
      }),

    /**
     * @description Test access token to confirm its validity.
     *
     * @tags login
     * @name TestTokenV1LoginTestTokenPost
     * @summary Test Token
     * @request POST:/v1/login/test-token
     * @secure
     */
    testTokenV1LoginTestTokenPost: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/v1/login/test-token`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags users
     * @name ReadUsersMeV1UsersMeGet
     * @summary Read Users Me
     * @request GET:/v1/users/me
     * @secure
     */
    readUsersMeV1UsersMeGet: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/v1/users/me`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Create new user without the need to be logged in.
     *
     * @tags users
     * @name RegisterUserV1UsersRegisterPost
     * @summary Register User
     * @request POST:/v1/users/register
     */
    registerUserV1UsersRegisterPost: (
      data: BodyRegisterUserV1UsersRegisterPost,
      params: RequestParams = {}
    ) =>
      this.request<User, HTTPValidationError>({
        path: `/v1/users/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Create new user.
     *
     * @tags users
     * @name CreateUserV1UsersPost
     * @summary Create User
     * @request POST:/v1/users/
     * @secure
     */
    createUserV1UsersPost: (data: UserCreate, params: RequestParams = {}) =>
      this.request<User, HTTPValidationError>({
        path: `/v1/users/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Delete existing user.
     *
     * @tags users
     * @name DeleteUserV1UsersUserIdDelete
     * @summary Delete User
     * @request DELETE:/v1/users/{user_id}
     * @secure
     */
    deleteUserV1UsersUserIdDelete: (
      userId: number,
      params: RequestParams = {}
    ) =>
      this.request<User, HTTPValidationError>({
        path: `/v1/users/${userId}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve the id of the latest synchronised block in our database.
     *
     * @tags state
     * @name LastBlockV1StateLastBlockGet
     * @summary Last Block
     * @request GET:/v1/state/last_block
     * @secure
     */
    lastBlockV1StateLastBlockGet: (params: RequestParams = {}) =>
      this.request<LastBlock, any>({
        path: `/v1/state/last_block`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve the timestamp of the latest synchronised block.
     *
     * @tags state
     * @name LastTimeV1StateLastTimeGet
     * @summary Last Time
     * @request GET:/v1/state/last_time
     * @secure
     */
    lastTimeV1StateLastTimeGet: (params: RequestParams = {}) =>
      this.request<LastTime, any>({
        path: `/v1/state/last_time`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve executive voting activity.
     *
     * @tags governance
     * @name ReadExecutivesV1GovernanceExecutivesGet
     * @summary Read Executives
     * @request GET:/v1/governance/executives
     * @secure
     */
    readExecutivesV1GovernanceExecutivesGet: (
      query?: {
        /**
         * spell address
         * unique identifier for proposal in executive form
         * @example "0xf86d621f42ec36b6fd4e5dc660a47ad98d50cfc0"
         */
        executive?: string;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /** @default "asc" */
        order?: ApiApiV1EndpointsGovernanceOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Executive[], HTTPValidationError>({
        path: `/v1/governance/executives`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve full list of executives.
     *
     * @tags governance
     * @name ReadExecutivesListV1GovernanceExecutivesListGet
     * @summary Read Executives List
     * @request GET:/v1/governance/executives_list
     * @secure
     */
    readExecutivesListV1GovernanceExecutivesListGet: (
      query?: {
        /** @default "asc" */
        order?: ApiApiV1EndpointsGovernanceOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExecutivesList[], HTTPValidationError>({
        path: `/v1/governance/executives_list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve all spells.
     *
     * @tags governance
     * @name ReadSpellsListV1GovernanceSpellsListGet
     * @summary Read Spells List
     * @request GET:/v1/governance/spells_list
     * @secure
     */
    readSpellsListV1GovernanceSpellsListGet: (
      query?: {
        /** @default "asc" */
        order?: ApiApiV1EndpointsGovernanceOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SpellsList[], HTTPValidationError>({
        path: `/v1/governance/spells_list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve poll voting activity.
     *
     * @tags governance
     * @name ReadPollsV1GovernancePollsGet
     * @summary Read Polls
     * @request GET:/v1/governance/polls
     * @secure
     */
    readPollsV1GovernancePollsGet: (
      query?: {
        /**
         * poll id
         * unique poll identifier
         * @example "684"
         */
        poll?: string;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Vote[], HTTPValidationError>({
        path: `/v1/governance/polls`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve updated poll voting activity.
     *
     * @tags governance
     * @name ReadPolls2V1GovernancePolls2Get
     * @summary Read Polls 2
     * @request GET:/v1/governance/polls_2
     * @secure
     */
    readPolls2V1GovernancePolls2Get: (
      query?: {
        /** Poll Id */
        poll_id?: number;
        /** An enumeration. */
        type?: DelegateType;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Vote2[], HTTPValidationError>({
        path: `/v1/governance/polls_2`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve creating and braking vote proxy events.
     *
     * @tags governance
     * @name ReadProxiesV1GovernanceProxiesGet
     * @summary Read Proxies
     * @request GET:/v1/governance/proxies
     * @secure
     */
    readProxiesV1GovernanceProxiesGet: (
      query?: {
        /**
         * Voter
         * voter wallet address
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b"
         */
        voter?: string;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Proxy[], HTTPValidationError>({
        path: `/v1/governance/proxies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve MKR stakes and withdraws to and from chief.
     *
     * @tags governance
     * @name ReadStakesV1GovernanceStakesGet
     * @summary Read Stakes
     * @request GET:/v1/governance/stakes
     * @secure
     */
    readStakesV1GovernanceStakesGet: (
      query?: {
        /**
         * Voter
         * voter wallet address
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b"
         */
        voter?: string;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Stake[], HTTPValidationError>({
        path: `/v1/governance/stakes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve delegates.
     *
     * @tags governance
     * @name ReadDelegatesV1GovernanceDelegatesGet
     * @summary Read Delegates
     * @request GET:/v1/governance/delegates
     * @secure
     */
    readDelegatesV1GovernanceDelegatesGet: (
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Delegate[], HTTPValidationError>({
        path: `/v1/governance/delegates`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve delegate support for end of given day.
     *
     * @tags governance
     * @name ReadDelegatesSupportV1GovernanceDelegatesSupportGet
     * @summary Read Delegates Support
     * @request GET:/v1/governance/delegates_support
     * @secure
     */
    readDelegatesSupportV1GovernanceDelegatesSupportGet: (
      query?: {
        /**
         * From Date
         * @format date
         * @default "2023-04-06"
         */
        from_date?: string;
        /**
         * To Date
         * @format date
         * @default "2023-04-06"
         */
        to_date?: string;
        /** An enumeration. */
        type?: DelegateType;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Support[], HTTPValidationError>({
        path: `/v1/governance/delegates_support`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Get list of spells.
     *
     * @tags governance
     * @name ReadSpellsV1GovernanceSpellsSummaryGet
     * @summary Read Spells
     * @request GET:/v1/governance/spells_summary
     * @secure
     */
    readSpellsV1GovernanceSpellsSummaryGet: (
      query?: {
        /**
         * Spell
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         */
        spell?: string;
        /** Ilk */
        ilk?: string;
        /** Parameter */
        parameter?: string;
        /**
         * Timestamp Gt
         * @format date-time
         */
        timestamp_gt?: string;
        /**
         * Timestamp Lte
         * @format date-time
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** @default "desc" */
        order?: ApiApiV1EndpointsGovernanceOrder;
      },
      params: RequestParams = {}
    ) =>
      this.request<SpellSummary[], HTTPValidationError>({
        path: `/v1/governance/spells_summary`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve creating and braking vote proxy events.
     *
     * @tags governance
     * @name ReadParticipationCostV1GovernanceParticipationCostGet
     * @summary Read Participation Cost
     * @request GET:/v1/governance/participation_cost
     * @secure
     */
    readParticipationCostV1GovernanceParticipationCostGet: (
      query?: {
        /** Poll Id */
        poll_id?: number;
        /**
         * Voter
         * voter wallet address
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0xaf8aa6846539033eaf0c3ca4c9c7373e370e039b"
         */
        voter?: string;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ParticipationCost[], HTTPValidationError>({
        path: `/v1/governance/participation_cost`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags governance
     * @name ReadVotersV1GovernanceVotersGet
     * @summary Read Voters
     * @request GET:/v1/governance/voters
     * @secure
     */
    readVotersV1GovernanceVotersGet: (params: RequestParams = {}) =>
      this.request<Voter[], any>({
        path: `/v1/governance/voters`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags governance
     * @name ReadGovernanceOverviewV1GovernanceOverviewGet
     * @summary Read Governance Overview
     * @request GET:/v1/governance/overview
     * @secure
     */
    readGovernanceOverviewV1GovernanceOverviewGet: (
      params: RequestParams = {}
    ) =>
      this.request<Overview, any>({
        path: `/v1/governance/overview`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags governance
     * @name ReadVestInitsV1GovernanceVestInitsGet
     * @summary Read Vest Inits
     * @request GET:/v1/governance/vest_inits
     * @secure
     */
    readVestInitsV1GovernanceVestInitsGet: (
      query?: {
        /**
         * Contract Address
         * token vesting smart contract or leave blank for all vesting contracts
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0x2cc583c0aacdac9e23cb601fda8f1a0c56cdcb71"
         */
        contract_address?: string;
        /**
         * Id
         * id of the vesting plan or leave blank for all plams
         * @example 1
         */
        id?: number;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VestInit[], HTTPValidationError>({
        path: `/v1/governance/vest_inits`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags governance
     * @name ReadVestClaimsV1GovernanceVestClaimsGet
     * @summary Read Vest Claims
     * @request GET:/v1/governance/vest_claims
     * @secure
     */
    readVestClaimsV1GovernanceVestClaimsGet: (
      query?: {
        /**
         * Contract Address
         * token vesting smart contract or leave blank for all vesting contracts
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0x2cc583c0aacdac9e23cb601fda8f1a0c56cdcb71"
         */
        contract_address?: string;
        /**
         * Id
         * id of the vesting plan or leave blank for all plams
         * @example 1
         */
        id?: number;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VestClaim[], HTTPValidationError>({
        path: `/v1/governance/vest_claims`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags governance
     * @name ReadVestYanksV1GovernanceVestYanksGet
     * @summary Read Vest Yanks
     * @request GET:/v1/governance/vest_yanks
     * @secure
     */
    readVestYanksV1GovernanceVestYanksGet: (
      query?: {
        /**
         * Contract Address
         * token vesting smart contract or leave blank for all vesting contracts
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0x2cc583c0aacdac9e23cb601fda8f1a0c56cdcb71"
         */
        contract_address?: string;
        /**
         * Id
         * id of the vesting plan or leave blank for all plams
         * @example 1
         */
        id?: number;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VestYank[], HTTPValidationError>({
        path: `/v1/governance/vest_yanks`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags governance
     * @name ReadVestBlowsV1GovernanceVestBlowsGet
     * @summary Read Vest Blows
     * @request GET:/v1/governance/vest_blows
     * @secure
     */
    readVestBlowsV1GovernanceVestBlowsGet: (
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VestBlow[], HTTPValidationError>({
        path: `/v1/governance/vest_blows`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve ERC-20 transfers sent to and from DSPauseProxy (0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB) contract.
     *
     * @tags governance
     * @name ReadPauseProxyTransfersV1GovernanceTransfersPauseProxyGet
     * @summary Read Pause Proxy Transfers
     * @request GET:/v1/governance/transfers/pause_proxy
     * @secure
     */
    readPauseProxyTransfersV1GovernanceTransfersPauseProxyGet: (
      query?: {
        /** Token */
        token?: string;
        /** To Address */
        to_address?: string;
        /** From Address */
        from_address?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PauseProxyTransfers[], HTTPValidationError>({
        path: `/v1/governance/transfers/pause_proxy`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get history of delegations.
     *
     * @tags governance
     * @name ReadDelegationsV1GovernanceDelegationsGet
     * @summary Read Delegations
     * @request GET:/v1/governance/delegations
     * @secure
     */
    readDelegationsV1GovernanceDelegationsGet: (
      query?: {
        /** Vote Delegate */
        vote_delegate?: string;
        /** Delegator */
        delegator?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Delegations[], HTTPValidationError>({
        path: `/v1/governance/delegations`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get delegates balances.
     *
     * @tags governance
     * @name ReadDelegatesBalancesV1GovernanceDelegatesBalancesGet
     * @summary Read Delegates Balances
     * @request GET:/v1/governance/delegates_balances
     * @secure
     */
    readDelegatesBalancesV1GovernanceDelegatesBalancesGet: (
      query?: {
        /** An enumeration. */
        type?: DelegateType;
        /** Vote Delegate */
        vote_delegate?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<DelegatesSupport[], HTTPValidationError>({
        path: `/v1/governance/delegates_balances`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get delegates monthly compensation.
     *
     * @tags governance
     * @name ReadDelegatesMonthlyCompensationV1GovernanceDelegatesMonthlyCompensationGet
     * @summary Read Delegates Monthly Compensation
     * @request GET:/v1/governance/delegates_monthly_compensation
     * @secure
     */
    readDelegatesMonthlyCompensationV1GovernanceDelegatesMonthlyCompensationGet:
      (params: RequestParams = {}) =>
        this.request<DelegatesMonthlyCompensation[], any>({
          path: `/v1/governance/delegates_monthly_compensation`,
          method: 'GET',
          secure: true,
          format: 'json',
          ...params
        }),

    /**
     * @description Get current delegates status.
     *
     * @tags governance
     * @name ReadCurrentDelegatesV1GovernanceCurrentDelegatesGet
     * @summary Read Current Delegates
     * @request GET:/v1/governance/current_delegates
     * @secure
     */
    readCurrentDelegatesV1GovernanceCurrentDelegatesGet: (
      query?: {
        /** An enumeration. */
        type?: DelegateType;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrentDelegates[], HTTPValidationError>({
        path: `/v1/governance/current_delegates`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get delegation summary.
     *
     * @tags governance
     * @name ReadDelegationSummaryV1GovernanceDelegationSummaryGet
     * @summary Read Delegation Summary
     * @request GET:/v1/governance/delegation_summary
     * @secure
     */
    readDelegationSummaryV1GovernanceDelegationSummaryGet: (
      query?: {
        /** An enumeration. */
        type?: DelegateType;
        /** Delegate */
        delegate?: string;
        /** Delegator */
        delegator?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DelegationSummary[], HTTPValidationError>({
        path: `/v1/governance/delegation_summary`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get full polls information.
     *
     * @tags governance
     * @name ReadPollsDetailsV1GovernancePollsSummaryGet
     * @summary Read Polls Details
     * @request GET:/v1/governance/polls_summary
     * @secure
     */
    readPollsDetailsV1GovernancePollsSummaryGet: (params: RequestParams = {}) =>
      this.request<Poll[], any>({
        path: `/v1/governance/polls_summary`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get aggregated votes summary.
     *
     * @tags governance
     * @name ReadVotesSummaryV1GovernanceVotesSummaryGet
     * @summary Read Votes Summary
     * @request GET:/v1/governance/votes_summary
     * @secure
     */
    readVotesSummaryV1GovernanceVotesSummaryGet: (params: RequestParams = {}) =>
      this.request<VotesSummary[], any>({
        path: `/v1/governance/votes_summary`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get full executives summary.
     *
     * @tags governance
     * @name ReadExecutivesSummaryV1GovernanceExecutivesSummaryGet
     * @summary Read Executives Summary
     * @request GET:/v1/governance/executives_summary
     * @secure
     */
    readExecutivesSummaryV1GovernanceExecutivesSummaryGet: (
      params: RequestParams = {}
    ) =>
      this.request<ExecutivesSummary[], any>({
        path: `/v1/governance/executives_summary`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The endpoint allows pulling of filtered data about current state of all or selected vaults.
     *
     * @tags vaults
     * @name ReadCurrentVaultsV1VaultsCurrentStateGet
     * @summary Read Current Vaults
     * @request GET:/v1/vaults/current_state
     * @secure
     */
    readCurrentVaultsV1VaultsCurrentStateGet: (
      query?: {
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /**
         * Vault
         * unique vault identifier
         * @example "26232"
         */
        vault?: string;
        /**
         * Owner
         * owner wallet address
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0x0b98f1d6ee453e8b0c36def52289a3de3bc82c5b"
         */
        owner?: string;
        /** Debt Gt */
        debt_gt?: number;
        /** Debt Lte */
        debt_lte?: number;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExperimentalCurrentVault[], HTTPValidationError>({
        path: `/v1/vaults/current_state`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve events changing vault's state throughout its lifetime.
     *
     * @tags vaults
     * @name ReadVaultHistoryV1VaultsVaultHistoryVaultGet
     * @summary Read Vault History
     * @request GET:/v1/vaults/vault_history/{vault}
     * @secure
     */
    readVaultHistoryV1VaultsVaultHistoryVaultGet: (
      vault: string,
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExperimentalVaultHistory[], HTTPValidationError>({
        path: `/v1/vaults/vault_history/${vault}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve a vault's state at a given time.
     *
     * @tags vaults
     * @name ReadVaultSnapshotV1VaultsVaultSnapshotVaultTimestampGet
     * @summary Read Vault Snapshot
     * @request GET:/v1/vaults/vault_snapshot/{vault}/{timestamp}
     * @secure
     */
    readVaultSnapshotV1VaultsVaultSnapshotVaultTimestampGet: (
      vault: string,
      timestamp: string,
      params: RequestParams = {}
    ) =>
      this.request<VaultState, HTTPValidationError>({
        path: `/v1/vaults/vault_snapshot/${vault}/${timestamp}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve a vault's state at a given block.
     *
     * @tags vaults
     * @name ReadVaultBlockV1VaultsVaultBlockSnapshotVaultBlockGet
     * @summary Read Vault Block
     * @request GET:/v1/vaults/vault_block_snapshot/{vault}/{block}
     * @secure
     */
    readVaultBlockV1VaultsVaultBlockSnapshotVaultBlockGet: (
      vault: string,
      block: number,
      params: RequestParams = {}
    ) =>
      this.request<VaultState, HTTPValidationError>({
        path: `/v1/vaults/vault_block_snapshot/${vault}/${block}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve vault's orgins.
     *
     * @tags vaults
     * @name ReadVaultsOriginsV1VaultsOriginsGet
     * @summary Read Vaults Origins
     * @request GET:/v1/vaults/origins
     * @secure
     */
    readVaultsOriginsV1VaultsOriginsGet: (
      query?: {
        /** Vault */
        vault?: string;
        /**
         * Owner
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         */
        owner?: string;
        /**
         * Wallet
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         */
        wallet?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Origin[], HTTPValidationError>({
        path: `/v1/vaults/origins`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get detailed information on vault ownership.
     *
     * @tags vaults
     * @name ReadVaultOwnershipV1VaultsVaultOwnershipGet
     * @summary Read Vault Ownership
     * @request GET:/v1/vaults/vault_ownership
     * @secure
     */
    readVaultOwnershipV1VaultsVaultOwnershipGet: (
      query?: {
        /** Vault */
        vault?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Ownership[], HTTPValidationError>({
        path: `/v1/vaults/vault_ownership`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Get vault's daily snapshot.
     *
     * @tags vaults
     * @name ReadVaultHistoryDailyV1VaultsVaultHistoryDailyGet
     * @summary Read Vault History Daily
     * @request GET:/v1/vaults/vault_history_daily
     * @secure
     */
    readVaultHistoryDailyV1VaultsVaultHistoryDailyGet: (
      query?: {
        /** Vault */
        vault?: string;
        /** Ilk */
        ilk?: string;
        /**
         * Date Gt
         * @format date
         */
        date_gt?: string;
        /**
         * Date Lte
         * @format date
         */
        date_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VaultHistoryDaily[], HTTPValidationError>({
        path: `/v1/vaults/vault_history_daily`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve liquidations related actions (kick, take, redo).
     *
     * @tags vaults/liquidations
     * @name ReadActionsV1VaultsLiquidationsActionsGet
     * @summary Read Actions
     * @request GET:/v1/vaults/liquidations/actions
     * @secure
     */
    readActionsV1VaultsLiquidationsActionsGet: (
      query?: {
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /**
         * Auction Id
         * auction identifier. unique within the ilk, when filtering it should be used alongside ilk
         * @example 3
         */
        auction_id?: number;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Status
         * 1: successful transactions, 0: failed transactions
         * @example 1
         */
        status?: number;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Action[], HTTPValidationError>({
        path: `/v1/vaults/liquidations/actions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve liquidations auctions rounds.
     *
     * @tags vaults/liquidations
     * @name ReadRoundsV1VaultsLiquidationsRoundsGet
     * @summary Read Rounds
     * @request GET:/v1/vaults/liquidations/rounds
     * @secure
     */
    readRoundsV1VaultsLiquidationsRoundsGet: (
      query?: {
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /**
         * Auction Id
         * auction identifier. unique within the ilk, when filtering it should be used alongside ilk
         * @example 3
         */
        auction_id?: number;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        round_start_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        round_start_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Round[], HTTPValidationError>({
        path: `/v1/vaults/liquidations/rounds`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve liquidated vault details. "bark" is the trigger action for a vault liquidation.
     *
     * @tags vaults/liquidations
     * @name ReadBarksV1VaultsLiquidationsBarksGet
     * @summary Read Barks
     * @request GET:/v1/vaults/liquidations/barks
     * @secure
     */
    readBarksV1VaultsLiquidationsBarksGet: (
      query?: {
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /**
         * Vault
         * unique vault identifier
         * @example "26232"
         */
        vault?: string;
        /**
         * Keeper
         * unique keeper identifier
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         * @example "0x008ca3a9c52e0f0d9ee94d310d20d67399d44f6c"
         */
        keeper?: string;
        /**
         * greater than
         * returns objects greater than the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_gt?: string;
        /**
         * less or equal than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Bark[], HTTPValidationError>({
        path: `/v1/vaults/liquidations/barks`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve details about collateral liquidations through auctions.
     *
     * @tags vaults/liquidations
     * @name ReadAuctionsV1VaultsLiquidationsAuctionsGet
     * @summary Read Auctions
     * @request GET:/v1/vaults/liquidations/auctions
     * @secure
     */
    readAuctionsV1VaultsLiquidationsAuctionsGet: (
      query?: {
        /**
         * Auction Id
         * auction identifier. unique within the ilk, when filtering it should be used alongside ilk
         * @example 3
         */
        auction_id?: number;
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /**
         * greater than
         * returns objects greater than the specified debt
         * @example 24000.45
         */
        debt_gt?: number;
        /**
         * less or equal than
         * returns objects less than or equal to the specified debt
         * @example 24000.45
         */
        debt_lte?: number;
        /**
         * auction start (timestamp) greater than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        auction_start_gt?: string;
        /**
         * auction start (timestamp) greater than
         * returns objects less than or equal to the specified datetime
         * @format date-time
         * @example "2021-11-14T14:23:02.232Z"
         */
        auction_start_lte?: string;
        /**
         * Vault
         * unique vault identifier
         * @example "26232"
         */
        vault?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Auction[], HTTPValidationError>({
        path: `/v1/vaults/liquidations/auctions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The endpoint allows getting a list of available system parameters.
     *
     * @tags protocol parameters
     * @name ReadParameterListV1ProtocolParametersParameterListGet
     * @summary Read Parameter List
     * @request GET:/v1/protocol_parameters/parameter_list
     * @secure
     */
    readParameterListV1ProtocolParametersParameterListGet: (
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, HTTPValidationError>({
        path: `/v1/protocol_parameters/parameter_list`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The endpoint allows pulling of filtered system parameters events.
     *
     * @tags protocol parameters
     * @name ReadParameterEventV1ProtocolParametersParameterEventGet
     * @summary Read Parameter Event
     * @request GET:/v1/protocol_parameters/parameter_event
     * @secure
     */
    readParameterEventV1ProtocolParametersParameterEventGet: (
      query?: {
        /** Parameter */
        parameter?: string;
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /**
         * Spell
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         */
        spell?: string;
        /**
         * Timestamp Gt
         * @format date-time
         */
        timestamp_gt?: string;
        /**
         * Timestamp Lte
         * @format date-time
         */
        timestamp_lte?: string;
        /** @default "asc" */
        order?: ApiApiV1EndpointsParametersOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExperimentalParameterEvent[], HTTPValidationError>({
        path: `/v1/protocol_parameters/parameter_event`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve a parameter's snapshot at a given time.
     *
     * @tags protocol parameters
     * @name ReadParameterSnapshotV1ProtocolParametersParameterSnapshotGet
     * @summary Read Parameter Snapshot
     * @request GET:/v1/protocol_parameters/parameter_snapshot
     * @secure
     */
    readParameterSnapshotV1ProtocolParametersParameterSnapshotGet: (
      query?: {
        /** Parameter */
        parameter?: string;
        /** Ilk */
        ilk?: string;
        /**
         * Timestamp
         * @format date-time
         */
        timestamp?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ParameterSnapshot[], HTTPValidationError>({
        path: `/v1/protocol_parameters/parameter_snapshot`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. View token transfer history at a given block or timestamp.
     *
     * @tags tokens
     * @name TokenTransferHistoryV1TokensTokenTransferHistoryGet
     * @summary Token Transfer History
     * @request GET:/v1/tokens/token_transfer_history
     * @secure
     */
    tokenTransferHistoryV1TokensTokenTransferHistoryGet: (
      query: {
        /** An enumeration. */
        token: ApiApiV1EndpointsTokensToken;
        /** Block Gt */
        block_gt?: number;
        /** Block Lte */
        block_lte?: number;
        /**
         * Timestamp Gt
         * @minLength 19
         * @maxLength 19
         * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$
         */
        timestamp_gt?: string;
        /**
         * Timestamp Lte
         * @minLength 19
         * @maxLength 19
         * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$
         */
        timestamp_lte?: string;
        /**
         * Address
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         */
        address?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** @default "desc" */
        order?: ApiApiV1EndpointsTokensOrder;
      },
      params: RequestParams = {}
    ) =>
      this.request<TransferHistory[], HTTPValidationError>({
        path: `/v1/tokens/token_transfer_history`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. View token balance history at a given block or timestamp.
     *
     * @tags tokens
     * @name TokenBalanceHistoryV1TokensTokenBalanceHistoryGet
     * @summary Token Balance History
     * @request GET:/v1/tokens/token_balance_history
     * @secure
     */
    tokenBalanceHistoryV1TokensTokenBalanceHistoryGet: (
      query: {
        /** An enumeration. */
        token: ApiApiV1EndpointsTokensToken;
        /**
         * Date Gte
         * @minLength 10
         * @maxLength 10
         * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
         */
        date_gte?: string;
        /**
         * Date Lte
         * @minLength 10
         * @maxLength 10
         * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
         */
        date_lte?: string;
        /**
         * Address
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-zA-z0-9]{40}$
         */
        address?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
        /** @default "desc" */
        order?: ApiApiV1EndpointsTokensOrder;
      },
      params: RequestParams = {}
    ) =>
      this.request<BalanceHistory[], HTTPValidationError>({
        path: `/v1/tokens/token_balance_history`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Read recent token supply based on token name and network. Available tokens: DAI Available networks: ETHEREUM
     *
     * @tags tokens
     * @name ReadTotalSupplyV1TokensTotalSupplyGet
     * @summary Read Total Supply
     * @request GET:/v1/tokens/total_supply
     * @secure
     */
    readTotalSupplyV1TokensTotalSupplyGet: (
      query: {
        /** An enumeration. */
        token: TotalSupplyToken;
        /** An enumeration. */
        network: Network;
      },
      params: RequestParams = {}
    ) =>
      this.request<TotalSupply, HTTPValidationError>({
        path: `/v1/tokens/total_supply`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags metrics
     * @name ReadOptimismMetricsV1MetricsOptimismGet
     * @summary Read Optimism Metrics
     * @request GET:/v1/metrics/optimism
     * @secure
     */
    readOptimismMetricsV1MetricsOptimismGet: (params: RequestParams = {}) =>
      this.request<Bridge, any>({
        path: `/v1/metrics/optimism`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description
     *
     * @tags metrics
     * @name ReadArbitrumMetricsV1MetricsArbitrumGet
     * @summary Read Arbitrum Metrics
     * @request GET:/v1/metrics/arbitrum
     * @secure
     */
    readArbitrumMetricsV1MetricsArbitrumGet: (params: RequestParams = {}) =>
      this.request<Bridge, any>({
        path: `/v1/metrics/arbitrum`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description
     *
     * @tags metrics
     * @name ReadStarknetMetricsV1MetricsStarknetGet
     * @summary Read Starknet Metrics
     * @request GET:/v1/metrics/starknet
     * @secure
     */
    readStarknetMetricsV1MetricsStarknetGet: (params: RequestParams = {}) =>
      this.request<Bridge, any>({
        path: `/v1/metrics/starknet`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description
     *
     * @tags metrics
     * @name ReadSummaryMetricsV1MetricsSummaryGet
     * @summary Read Summary Metrics
     * @request GET:/v1/metrics/summary
     * @secure
     */
    readSummaryMetricsV1MetricsSummaryGet: (params: RequestParams = {}) =>
      this.request<Summary, any>({
        path: `/v1/metrics/summary`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags bridges
     * @name ReadOptimismBridgeInfoV1BridgesOptimismGet
     * @summary Read Optimism Bridge Info
     * @request GET:/v1/bridges/optimism
     * @secure
     */
    readOptimismBridgeInfoV1BridgesOptimismGet: (params: RequestParams = {}) =>
      this.request<Info, any>({
        path: `/v1/bridges/optimism`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags bridges
     * @name ReadArbitrumBridgeInfoV1BridgesArbitrumGet
     * @summary Read Arbitrum Bridge Info
     * @request GET:/v1/bridges/arbitrum
     * @secure
     */
    readArbitrumBridgeInfoV1BridgesArbitrumGet: (params: RequestParams = {}) =>
      this.request<Info, any>({
        path: `/v1/bridges/arbitrum`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags bridges
     * @name ReadStarknetBridgeInfoV1BridgesStarknetGet
     * @summary Read Starknet Bridge Info
     * @request GET:/v1/bridges/starknet
     * @secure
     */
    readStarknetBridgeInfoV1BridgesStarknetGet: (params: RequestParams = {}) =>
      this.request<Info, any>({
        path: `/v1/bridges/starknet`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags bridges
     * @name ReadAllBridgesInfoV1BridgesAllGet
     * @summary Read All Bridges Info
     * @request GET:/v1/bridges/all
     * @secure
     */
    readAllBridgesInfoV1BridgesAllGet: (params: RequestParams = {}) =>
      this.request<Info, any>({
        path: `/v1/bridges/all`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags teleport
     * @name ReadTeleportDomainsV1TeleportDomainsGet
     * @summary Read Teleport Domains
     * @request GET:/v1/teleport/domains
     * @secure
     */
    readTeleportDomainsV1TeleportDomainsGet: (params: RequestParams = {}) =>
      this.request<Domains, any>({
        path: `/v1/teleport/domains`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Get blocks from Maker constitution.
     *
     * @tags utils
     * @name ReadBlocksV1UtilsBlocksPost
     * @summary Read Blocks
     * @request POST:/v1/utils/blocks
     * @secure
     */
    readBlocksV1UtilsBlocksPost: (
      data: number[],
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Block[], HTTPValidationError>({
        path: `/v1/utils/blocks`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description The endpoint allows pulling of data representing FLAP auctions actions.
     *
     * @tags auctions
     * @name ReadFlapActionsV1AuctionsFlapsGet
     * @summary Read Flap Actions
     * @request GET:/v1/auctions/flaps
     * @secure
     */
    readFlapActionsV1AuctionsFlapsGet: (
      query?: {
        /**
         * Timestamp Gt
         * @format date-time
         */
        timestamp_gt?: string;
        /**
         * Timestamp Lte
         * @format date-time
         */
        timestamp_lte?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Flap[], HTTPValidationError>({
        path: `/v1/auctions/flaps`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve DAI transfers to and from listed MakerDAO related actors.
     *
     * @tags core units
     * @name ReadGovTransfersV1CoreUnitsTransfersGet
     * @summary Read Gov Transfers
     * @request GET:/v1/core_units/transfers
     * @secure
     */
    readGovTransfersV1CoreUnitsTransfersGet: (
      query?: {
        /**
         * Token
         * @default "DAI"
         */
        token?: string;
        /** To Address */
        to_address?: string;
        /** From Address */
        from_address?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<GovDAITransfers[], HTTPValidationError>({
        path: `/v1/core_units/transfers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve DAI transfers to and from listed MakerDAO related actors.
     *
     * @tags core units
     * @name ReadMultisigsEventsV1CoreUnitsMultisigsEventsGet
     * @summary Read Multisigs Events
     * @request GET:/v1/core_units/multisigs_events
     * @secure
     */
    readMultisigsEventsV1CoreUnitsMultisigsEventsGet: (
      query?: {
        /** Contract Address */
        contract_address?: string;
        /** Label */
        label?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @min 0
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @min 1
         * @max 100
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<MultisigEvent[], HTTPValidationError>({
        path: `/v1/core_units/multisigs_events`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      })
  };
}
