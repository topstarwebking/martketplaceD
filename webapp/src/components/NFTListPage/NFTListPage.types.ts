import { Dispatch } from 'redux'

import {
  fetchNFTsRequest,
  FetchNFTsRequestAction
} from '../../modules/nft/actions'
import { NFT } from '../../modules/nft/types'
import { View } from '../../modules/ui/types'
import { Section, SortBy, SearchOptions } from '../../modules/routing/search'
import {
  WearableRarity,
  WearableGender
} from '../../modules/nft/wearable/types'

export type Props = {
  defaultOnlyOnSale: boolean
  address?: string
  nfts: NFT[]
  page: number
  section: Section
  sortBy: SortBy
  wearableRarities: WearableRarity[]
  wearableGenders: WearableGender[]
  onlyOnSale: boolean | null
  view: View
  count: number | null
  isLoading: boolean
  onNavigate: (options?: SearchOptions) => void
  onFetchNFTs: typeof fetchNFTsRequest
}

export type MapStateProps = Pick<
  Props,
  | 'nfts'
  | 'page'
  | 'section'
  | 'sortBy'
  | 'onlyOnSale'
  | 'isLoading'
  | 'count'
  | 'wearableRarities'
  | 'wearableGenders'
>
export type OwnProps = Pick<
  Props,
  'address' | 'defaultOnlyOnSale' | 'view' | 'onNavigate'
>
export type MapDispatchProps = Pick<Props, 'onFetchNFTs'>
export type MapDispatch = Dispatch<FetchNFTsRequestAction>
