import { Deposit, Withdraw, CryptoDropped, Token, Emoji, ImgUrlChange, DescriptionChange, CryptoravesTransfer } from '../generated/TokenManagement/TokenManagement'

import { _Deposit, _Withdraw, _CryptoDropped, _Token, _UserBalance, _Transfer } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts
import { log, store, BigInt } from '@graphprotocol/graph-ts'

export function handleDeposit(event: Deposit): void {

  let id = event.transaction.hash.toHex()
  let entity = _Deposit.load(id)
  if (entity == null) {
    entity = new _Deposit(id)
  }
  entity.to = event.params._to
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
  entity.from = event.params._from
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
  entity.nftIndex = event.params.param0.nftIndex
  entity.totalSupply = event.params.param0.totalSupply
  entity.name = event.params.param0.name
  entity.symbol = event.params.param0.symbol
  entity.decimals = event.params.param0.decimals
  entity.emoji = event.params.param0.emoji
  entity.tokenBrandImageUrl = event.params.param0.tokenBrandImageUrl
  entity.modified = event.block.timestamp
  entity.save()
}

export function handleEmoji(event: Emoji): void {
  let id = event.params.cryptoravesTokenId.toHex()
  let token = _Token.load(id)

  token.emoji = event.params._emoji
  token.modified = event.block.timestamp
  token.save()

}

export function handleImgUrlChange(event: ImgUrlChange): void {
  let id = event.params.cryptoravesTokenId.toHex()
  let token = _Token.load(id)

  token.tokenBrandImageUrl = event.params._url
  token.modified = event.block.timestamp
  token.save()

}

export function handleDescriptionChange(event: DescriptionChange): void {
  let id = event.params.cryptoravesTokenId.toHex()
  let token = _Token.load(id)

  token.tokenDescription = event.params._description
  token.modified = event.block.timestamp
  token.save()

}
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
