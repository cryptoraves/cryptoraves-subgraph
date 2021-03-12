import { Transfer, Deposit, Withdraw } from '../generated/TokenManagement/TokenManagement'

import { _Transfer, _Deposit, _Withdraw } from "../generated/schema"

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
  entity.save()
  
}

export function handleDeposit(event: Deposit): void {

  let id = event.transaction.hash.toHex()
  let entity = _Deposit.load(id)
  if (entity == null) {
    entity = new _Deposit(id)
  }
  entity.from = event.params._from
  entity.value = event.params._value
  entity.tokenAddress = event.params._token
  entity.cryptoravesTokenId = event.params.cryptoravesTokenId
  entity.ercType = event.params._ercType
  entity.save()
}
export function handleWithdraw(event: Withdraw): void {
  let id = event.transaction.hash.toHex()
  let entity = _Withdraw.load(id)
  if (entity == null) {
    entity = new _Withdraw(id)
  }
  entity.to = event.params._to
  entity.value = event.params._value
  entity.tokenAddress = event.params._token
  entity.cryptoravesTokenId = event.params.cryptoravesTokenId
  entity.save()
}
