import { HeresMyAddress } from '../generated/TransactionManagement/TransactionManagement'
import { _HeresMyAddress } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts

export function handleHeresMyAddress(event: HeresMyAddress): void {
  let id = event.transaction.hash.toHex()

  let entity = _HeresMyAddress.load(id)
  if (entity == null) {
    entity = new _HeresMyAddress(id)
  }
  entity.ethAddress = event.params._layer1Address
  entity.cryptoravesAddress = event.params._walletContractAddress
  entity.save()
  
}
