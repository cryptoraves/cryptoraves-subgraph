import { Transfer, Deposit, Withdraw } from '../generated/TokenManagement/TokenManagement'

export function handleTransfer(event: Transfer): void {
  
  let transfer = transfers.load(event.params.id.toHex())
  transfer.from = event.params._from
  transfer.to = event.params._to
  transfer.value = event.params._value
  transfer.tokenId = event.params._tokenId
  transfer.save()
  
}

export function handleDeposit(event: Deposit): void {

  /*let id = event.params.id.toHex()
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()*/
}
export function handleWithdraw(event: Withdraw): void {

}
