import { Transfer, Deposit, Withdraw } from '../generated/TokenManagement/TokenManagement'

import { _Transfer, _Deposit, _Withdraw } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let id = event.transaction.hash.toHex()
  let entity = new _Transfer(id)
  entity.from = event.params._from
  entity.to = event.params._to
  entity.amount = event.params._value
  entity.tokenId = event.params._tokenId
  entity.save()
  
}

export function handleDeposit(event: Deposit): void {

  let id = event.transaction.hash.toHex()
  let entity = new _Deposit(id)
  entity.from = event.params._from
  entity.value = event.params._value
  entity.tokenAddress = event.params._token
  entity.cryptoravesTokenId = event.params.cryptoravesTokenId
  entity.ercType = event.params._ercType
  entity.save()
}
export function handleWithdraw(event: Withdraw): void {
  let id = event.transaction.hash.toHex()
  let entity = new _Withdraw(id)
  entity.to = event.params._to
  entity.value = event.params._value
  entity.tokenAddress = event.params._token
  entity.cryptoravesTokenId = event.params.cryptoravesTokenId
  entity.save()
}
