import { Transfer, HeresMyAddress } from '../generated/TransactionManagement/TransactionManagement'
import { _Transfer, _User } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts


export function handleTransfer(event: Transfer): void {
  let id = event.transaction.hash.toHex()

  let entity = _Transfer.load(id)
  if (entity == null) {
    entity = new _Transfer(id)
  }
  entity.from = event.params._from.toHex()
  entity.to = event.params._to.toHex()
  entity.amount = event.params._value
  entity.token = event.params._tokenId.toHex()
  entity.tweetId = event.params._tweetId
  entity.fromTo = event.params._from.toHex().concat(event.params._to.toHex())
  entity.save()
  
}

export function handleHeresMyAddress(event: HeresMyAddress): void {
  let id = event.params._cryptoravesAddress.toHex()

  let entity = _User.load(id)

  entity.layer1Address = event.params._layer1Address
  entity.save()
  
}
