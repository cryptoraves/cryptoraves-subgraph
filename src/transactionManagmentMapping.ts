import { CryptoravesTransfer, HeresMyAddress } from '../generated/TransactionManagement/TransactionManagement'
import { _Transfer, _User, _UserBalance } from "../generated/schema"

import { store, log, BigInt } from '@graphprotocol/graph-ts'

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts


export function handleCryptoravesTransfer(event: CryptoravesTransfer): void {
  let id = event.transaction.hash.toHex()

  let entity = _Transfer.load(id)
  if (entity == null) {
    entity = new _Transfer(id)
  }

  entity.from = event.params._from.toHex()

  entity.to = event.params._to.toHex()
  entity.amount = event.params._value
  entity.token = event.params._cryptoravesTokenId.toHex()
  entity.tweetId = event.params._tweetId
  entity.fromTo = event.params._from.toHex().concat(event.params._to.toHex())
  entity.modified = event.block.timestamp
  entity.save()

  let balanceIdFrom = event.params._from.toHex().concat(event.params._cryptoravesTokenId.toHex())
  let balanceFrom = _UserBalance.load(balanceIdFrom)
  if (balanceFrom == null) {
    balanceFrom = new _UserBalance(balanceIdFrom)
  }

  let fBal = balanceFrom.balance
  fBal = fBal.minus(event.params._value)
  if(fBal > BigInt.fromI32(0)){
    balanceFrom.balance = fBal
    balanceFrom.token = event.params._cryptoravesTokenId.toHex()
    balanceFrom.user = event.params._from.toHex()
    balanceFrom.save()
  }else{
    store.remove('_UserBalance', balanceIdFrom)
  }

//  if (fBal.isZero()){
//    store.remove('_UserBalance', balanceIdFrom)
//  } else {
//    balanceFrom.balance = fBal
//    balanceFrom.token = event.params._cryptoravesTokenId.toHex()
//    balanceFrom.user = event.params._from.toHex()
//    balanceFrom.save()
//  }
  let balanceIdTo = event.params._to.toHex().concat(event.params._cryptoravesTokenId.toHex())
  let balanceTo = _UserBalance.load(balanceIdTo)
  if (balanceTo == null) {
    balanceTo = new _UserBalance(balanceIdTo)
  }

  let tBal = balanceTo.balance
  tBal = tBal.plus(event.params._value)


  balanceTo.balance = tBal
  balanceTo.token = event.params._cryptoravesTokenId.toHex()
  balanceTo.user = event.params._to.toHex()
  balanceTo.save()
  log.info("ENTITYFROM*****TO*********USER******: {} {}", [event.params._from.toHexString(), event.params._to.toHex()])


}

export function handleHeresMyAddress(event: HeresMyAddress): void {
  let id = event.params._cryptoravesAddress.toHex()

  let entity = _User.load(id)

  entity.layer1Address = event.params._layer1Address
  entity.modified = event.block.timestamp
  entity.save()

}
