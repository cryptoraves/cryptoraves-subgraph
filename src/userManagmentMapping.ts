import { UserData, UsernameChange, ImageChange} from '../generated/UserManagement/UserManagement'
import { _UserData } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts

export function handleUserData(event: UserData): void {
  let id = event.params.param0.cryptoravesAddress.toHex()

  let entity = _UserData.load(id)
  if (entity == null) {
    entity = new _UserData(id)
  }

  entity.twitterUserId = event.params.param0.twitterUserId
  entity.userName = event.params.param0.twitterHandle
  entity.cryptoravesAddress = event.params.param0.cryptoravesAddress
  entity.imageUrl = event.params.param0.imageUrl
  entity.isManaged = event.params.param0.isManaged
  entity.isUser = event.params.param0.isUser
  entity.dropped = event.params.param0.dropped
  entity.tokenId = event.params.param0.tokenId
  entity.save()
}

export function handleUsernameChange(event: UsernameChange): void {
  let id = event.params._cryptoravesAddress.toHex()

  let entity = _UserData.load(id)

  entity.userName = event.params._handle
  entity.save()
}

export function handleImageChange(event: ImageChange): void {
  let id = event.params._cryptoravesAddress.toHex()

  let entity = _UserData.load(id)

  entity.imageUrl = event.params.imageUrl
  entity.save()
}
