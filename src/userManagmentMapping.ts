import { NewUser, UsernameChange, ImageChange} from '../generated/UserManagement/UserManagement'
import { _NewUser, _UsernameChange, _ImageChange } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts

export function handleNewUser(event: NewUser): void {
  let id = event.transaction.hash.toHex()

  let entity = _NewUser.load(id)
  if (entity == null) {
    entity = new _NewUser(id)
  }
  entity.userId = event.params._userId
  entity.userName = event.params._userName
  entity.cryptoravesAddress = event.params._address
  entity.imageUrl = event.params.imageUrl
  entity.save()
}

export function handleUsernameChange(event: UsernameChange): void {
  let id = event.transaction.hash.toHex()

  let entity = _UsernameChange.load(id)
  if (entity == null) {
    entity = new _UsernameChange(id)
  }
  entity.userId = event.params._userId
  entity.userName = event.params._handle
  entity.blockNumber = event.params.blockNumber
  entity.save()
}

export function handleImageChange(event: ImageChange): void {
  let id = event.transaction.hash.toHex()

  let entity = _ImageChange.load(id)
  if (entity == null) {
    entity = new _ImageChange(id)
  }
  entity.userId = event.params._userId
  entity.imageUrl = event.params.imageUrl
  entity.blockNumber = event.params.blockNumber
  entity.save()
}
