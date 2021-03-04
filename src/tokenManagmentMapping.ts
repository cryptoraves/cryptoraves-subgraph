import { Transfer, Deposit, Withdraw } from '../generated/TokenManagement/TokenManagement'
import { dataSource } from '@graphprotocol/graph-ts'



export function handleTransfer(event: Transfer): void {
  
  /*let wallet = new Gravatar(event.params.id.toHex())
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()*/
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
