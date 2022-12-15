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

/** AtRisk */
export interface AtRisk {
  /** Vault */
  vault: string;
  /** Ilk */
  ilk: string;
  /** Urn */
  urn: string;
  /** Current Price */
  current_price: number;
  /** Next Price */
  next_price?: number;
  /** Debt */
  debt: number;
  /** Collateral */
  collateral: number;
  /** Collateral Value */
  collateral_value: number;
  /** Liquidation Ratio */
  liquidation_ratio: number;
  /** Current Collateralization */
  current_collateralization: number;
  /** Next Collateralization */
  next_collateralization: number;
  /**
   * Next Price Update Utc
   * @format date-time
   */
  next_price_update_UTC: string;
  /** Approximate Time Left */
  approximate_time_left: string;
  /** Liquidation Price */
  liquidation_price: number;
}

/** AtRiskAlt */
export interface AtRiskAlt {
  /** Vault */
  vault: string;
  /** Ilk */
  ilk: string;
  /** Urn */
  urn: string;
  /** Current Price */
  current_price: number;
  /** Next Price */
  next_price?: number;
  /** Debt */
  debt: number;
  /** Collateral */
  collateral: number;
  /** Collateral Value */
  collateral_value: number;
  /** Liquidation Ratio */
  liquidation_ratio: number;
  /** Current Collateralization */
  current_collateralization: number;
  /** Next Collateralization */
  next_collateralization: number;
  /**
   * Next Price Update Utc
   * @format date-time
   */
  next_price_update_UTC: string;
  /** Approximate Time Left */
  approximate_time_left: string;
  /** Liquidation Price */
  liquidation_price: number;
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
  /**
   * Email
   * @format email
   */
  email: string;
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
  /** Average Dai Ownership */
  average_dai_ownership: number;
  /** Top 10 Holders */
  top_10_holders: Record<string, any>;
  /** Supply Pct Change */
  supply_pct_change: any[];
  /** Escrow Pct Change */
  escrow_pct_change: any[];
  /** Last Refresh */
  last_refresh: Record<string, any>;
}

/** CurrentVault */
export interface CurrentVault {
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

/** ParameterEvent */
export interface ParameterEvent {
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
  /** Vote Delegate */
  vote_delegate: string;
  /** Support */
  support: number;
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
  /**
   * Email
   * @format email
   */
  email?: string;
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
  /**
   * Email
   * @format email
   */
  email: string;
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

/** VaultHistory */
export interface VaultHistory {
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

/**
 * Order
 * An enumeration.
 */
export enum ApiApiV1EndpointsExperimentalOrder {
  Asc = 'asc',
  Desc = 'desc'
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
export interface SchemasTokensTokenToken {
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
 * #### Copytights
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
 * We highly encourage to use an email address that you have regular access to as we will use it to communicate major service changes.
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
      this.request<SchemasTokensTokenToken, HTTPValidationError>({
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
     * @request GET:/v1/teleport/executives
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Executive[], HTTPValidationError>({
        path: `/v1/teleport/executives`,
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
     * @request GET:/v1/teleport/executives_list
     * @secure
     */
    readExecutivesListV1GovernanceExecutivesListGet: (
      query?: {
        /** @default "asc" */
        order?: ApiApiV1EndpointsGovernanceOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExecutivesList[], HTTPValidationError>({
        path: `/v1/teleport/executives_list`,
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
     * @request GET:/v1/teleport/spells_list
     * @secure
     */
    readSpellsListV1GovernanceSpellsListGet: (
      query?: {
        /** @default "asc" */
        order?: ApiApiV1EndpointsGovernanceOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SpellsList[], HTTPValidationError>({
        path: `/v1/teleport/spells_list`,
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
     * @request GET:/v1/teleport/polls
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Vote[], HTTPValidationError>({
        path: `/v1/teleport/polls`,
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
     * @request GET:/v1/teleport/proxies
     * @secure
     */
    readProxiesV1GovernanceProxiesGet: (
      query?: {
        /**
         * Voter
         * voter wallet address
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Proxy[], HTTPValidationError>({
        path: `/v1/teleport/proxies`,
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
     * @request GET:/v1/teleport/stakes
     * @secure
     */
    readStakesV1GovernanceStakesGet: (
      query?: {
        /**
         * Voter
         * voter wallet address
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Stake[], HTTPValidationError>({
        path: `/v1/teleport/stakes`,
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
     * @request GET:/v1/teleport/delegates
     * @secure
     */
    readDelegatesV1GovernanceDelegatesGet: (
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Delegate[], HTTPValidationError>({
        path: `/v1/teleport/delegates`,
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
     * @request GET:/v1/teleport/delegates_support
     * @secure
     */
    readDelegatesSupportV1GovernanceDelegatesSupportGet: (
      query?: {
        /**
         * From Date
         * @format date
         * @default "2022-12-01"
         */
        from_date?: string;
        /**
         * To Date
         * @format date
         * @default "2022-12-01"
         */
        to_date?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Support[], HTTPValidationError>({
        path: `/v1/teleport/delegates_support`,
        method: 'GET',
        query: query,
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrentVault[], HTTPValidationError>({
        path: `/v1/vaults/current_state`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve events changing vault's state throught its lifetime.
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VaultHistory[], HTTPValidationError>({
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
        /** Owner */
        owner?: string;
        /** Wallet */
        wallet?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
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
        /** Spell */
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ParameterEvent[], HTTPValidationError>({
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
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Retrieve vaults at risk of being liquidated.
     *
     * @tags experimental
     * @name ReadVaultsAtRiskV1ExperimentalVaultsAtRiskGet
     * @summary Read Vaults At Risk
     * @request GET:/v1/experimental/vaults_at_risk
     * @secure
     */
    readVaultsAtRiskV1ExperimentalVaultsAtRiskGet: (
      params: RequestParams = {}
    ) =>
      this.request<AtRisk[], any>({
        path: `/v1/experimental/vaults_at_risk`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. The endpoint allows pulling of data representing FLAP auctions actions.
     *
     * @tags experimental
     * @name ReadFlapActionsV1ExperimentalFlapsGet
     * @summary Read Flap Actions
     * @request GET:/v1/experimental/flaps
     * @secure
     */
    readFlapActionsV1ExperimentalFlapsGet: (
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Flap[], HTTPValidationError>({
        path: `/v1/experimental/flaps`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Alternative endpoint returning vaults at risk of being liquidated.
     *
     * @tags experimental
     * @name ReadVaultsAtRiskAltV1ExperimentalVaultsAtRiskAltGet
     * @summary Read Vaults At Risk Alt
     * @request GET:/v1/experimental/vaults_at_risk_alt
     * @secure
     */
    readVaultsAtRiskAltV1ExperimentalVaultsAtRiskAltGet: (
      params: RequestParams = {}
    ) =>
      this.request<AtRiskAlt[], any>({
        path: `/v1/experimental/vaults_at_risk_alt`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Get vault's daily snapshot.
     *
     * @tags experimental
     * @name ReadVaultHistoryDailyV1ExperimentalVaultHistoryDailyGet
     * @summary Read Vault History Daily
     * @request GET:/v1/experimental/vault_history_daily
     * @secure
     */
    readVaultHistoryDailyV1ExperimentalVaultHistoryDailyGet: (
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VaultHistoryDaily[], HTTPValidationError>({
        path: `/v1/experimental/vault_history_daily`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Get blocks from Maker constitution.
     *
     * @tags experimental
     * @name ReadBlocksV1ExperimentalBlocksGet
     * @summary Read Blocks
     * @request GET:/v1/experimental/blocks
     * @secure
     */
    readBlocksV1ExperimentalBlocksGet: (
      query?: {
        /** Block Gt */
        block_gt?: number;
        /** Block Lte */
        block_lte?: number;
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Block[], HTTPValidationError>({
        path: `/v1/experimental/blocks`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Get blocks from Maker constitution.
     *
     * @tags experimental
     * @name ReadBlocksV1ExperimentalBlocksPost
     * @summary Read Blocks
     * @request POST:/v1/experimental/blocks
     * @secure
     */
    readBlocksV1ExperimentalBlocksPost: (
      data: number[],
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Block[], HTTPValidationError>({
        path: `/v1/experimental/blocks`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Get detailed information on vault ownership.
     *
     * @tags experimental
     * @name ReadVaultOwnershipV1ExperimentalVaultOwnershipGet
     * @summary Read Vault Ownership
     * @request GET:/v1/experimental/vault_ownership
     * @secure
     */
    readVaultOwnershipV1ExperimentalVaultOwnershipGet: (
      query?: {
        /** Vault */
        vault?: string;
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<Ownership[], HTTPValidationError>({
        path: `/v1/experimental/vault_ownership`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The endpoint allows getting a list of filtered system parameters events.
     *
     * @tags experimental
     * @name ReadExperimentalParameterEventV1ExperimentalParameterEventGet
     * @summary Read Experimental Parameter Event
     * @request GET:/v1/experimental/parameter_event
     * @secure
     */
    readExperimentalParameterEventV1ExperimentalParameterEventGet: (
      query?: {
        /** Parameter */
        parameter?: string;
        /**
         * Ilk
         * vault type
         * @example "ETH-A"
         */
        ilk?: string;
        /** Spell */
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
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExperimentalParameterEvent[], HTTPValidationError>({
        path: `/v1/experimental/parameter_event`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description Retrieve events changing vault's state throughout its lifetime.
     *
     * @tags experimental
     * @name ReadExperimentalVaultHistoryV1ExperimentalVaultHistoryVaultGet
     * @summary Read Experimental Vault History
     * @request GET:/v1/experimental/vault_history/{vault}
     * @secure
     */
    readExperimentalVaultHistoryV1ExperimentalVaultHistoryVaultGet: (
      vault: string,
      query?: {
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExperimentalVaultHistory[], HTTPValidationError>({
        path: `/v1/experimental/vault_history/${vault}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description The endpoint allows pulling of filtered data about current state of all or selected vaults.
     *
     * @tags experimental
     * @name ReadExperimentalCurrentVaultsV1ExperimentalCurrentStateGet
     * @summary Read Experimental Current Vaults
     * @request GET:/v1/experimental/current_state
     * @secure
     */
    readExperimentalCurrentVaultsV1ExperimentalCurrentStateGet: (
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
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExperimentalCurrentVault[], HTTPValidationError>({
        path: `/v1/experimental/current_state`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params
      }),

    /**
     * @description EXPERIMENTAL: DELIVERED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND. Get list of spells.
     *
     * @tags experimental
     * @name ReadSpellsV1ExperimentalSpellsSummaryGet
     * @summary Read Spells
     * @request GET:/v1/experimental/spells_summary
     * @secure
     */
    readSpellsV1ExperimentalSpellsSummaryGet: (
      query?: {
        /** Spell */
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
        /** @default "desc" */
        order?: ApiApiV1EndpointsExperimentalOrder;
        /**
         * Skip
         * ignore first object(s) returned
         * @default 0
         */
        skip?: number;
        /**
         * Limit
         * limit amount of objects returned
         * @default 100
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SpellSummary[], HTTPValidationError>({
        path: `/v1/experimental/spells_summary`,
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
         * Limit
         * @default 100
         */
        limit?: number;
        /**
         * Offset
         * @default 0
         */
        offset?: number;
        /** @default "desc" */
        order?: ApiApiV1EndpointsTokensOrder;
      },
      params: RequestParams = {}
    ) =>
      this.request<TransferHistory[], HTTPValidationError>({
        path: `/v1/tokens/token_transfer_history`,
        method: 'GET',
        query: query,
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
         * Limit
         * @default 100
         */
        limit?: number;
        /**
         * Offset
         * @default 0
         */
        offset?: number;
        /** @default "desc" */
        order?: ApiApiV1EndpointsTokensOrder;
      },
      params: RequestParams = {}
    ) =>
      this.request<BalanceHistory[], HTTPValidationError>({
        path: `/v1/tokens/token_balance_history`,
        method: 'GET',
        query: query,
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
      })
  };
}
