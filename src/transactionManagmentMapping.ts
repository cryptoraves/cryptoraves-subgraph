import { Transfer, HeresMyAddress } from '../generated/TransactionManagement/TransactionManagement'
import { _Transfer, _HeresMyAddress } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts


export function handleTransfer(event: Transfer): void {
  let id = event.transaction.hash.toHex()

  let entity = _Transfer.load(id)
  if (entity == null) {
    entity = new _Transfer(id)
  }
  entity.from = event.params._from
  entity.to = event.params._to
  entity.amount = event.params._value
  entity.tokenId = event.params._tokenId
  entity.tweetId = event.params._tweetId
  entity.save()
  
}

export function handleHeresMyAddress(event: HeresMyAddress): void {
  let id = event.transaction.hash.toHex()

  let entity = _HeresMyAddress.load(id)
  if (entity == null) {
    entity = new _HeresMyAddress(id)
  }
  entity.ethAddress = event.params._layer1Address
  entity.cryptoravesAddress = event.params._walletContractAddress
  entity.tweetId = event.params._tweetId
  entity.save()
  
}
