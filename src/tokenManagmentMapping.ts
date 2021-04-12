import { Deposit, Withdraw, CryptoDropped, Token, Emoji } from '../generated/TokenManagement/TokenManagement'

import { _Deposit, _Withdraw, _CryptoDropped, _Token} from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts
import { log } from '@graphprotocol/graph-ts'

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
  entity.ercType = event.params._ercType
  entity.save()
}
export function handleCryptoDropped(event: CryptoDropped): void {
  let id = event.transaction.hash.toHex()
  let entity = _CryptoDropped.load(id)
  if (entity == null) {
    entity = new _CryptoDropped(id)
  }
  entity.user = event.params.user
  entity.cryptoravesTokenId = event.params.tokenId
  entity.save()
}
export function handleToken(event: Token): void {

  let id = event.params.param0.cryptoravesTokenId.toHex()
  let entity = _Token.load(id)
  if (entity == null) {
    entity = new _Token(id)
  }
  //log.debug("Create entity {}", [id])
 
  entity.cryptoravesTokenId = event.params.param0.cryptoravesTokenId
  entity.isManagedToken = event.params.param0.isManagedToken
  entity.ercType = event.params.param0.ercType
  entity.totalSupply = event.params.param0.totalSupply
  entity.name = event.params.param0.name
  entity.symbol = event.params.param0.symbol
  entity.decimals = event.params.param0.decimals
  entity.emoji = event.params.param0.emoji
  entity.save()
}

export function handleEmoji(event: Emoji): void {
  let id = event.params.cryptoravesTokenId.toHex()
  let token = _Token.load(id)

  token.emoji = event.params._emoji
  token.save()

}
