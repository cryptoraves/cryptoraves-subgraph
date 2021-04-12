import { UserData, UsernameChange, ImageChange} from '../generated/UserManagement/UserManagement'
import { _UserData } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts

export function handleUserData(event: UserData): void {
  let id = event.params._userId.toHex()

  let entity = _UserData.load(id)
  if (entity == null) {
    entity = new _UserData(id)
  }
/*
    address account;
    string twitterHandle;
    string imageUrl;
    bool isManaged;
    bool isUser;
    bool dropped;
    uint256 tokenId;
*/
  entity.userId = event.params._userId
  entity.userName = event.params._userName
  entity.cryptoravesAddress = event.params._address
  entity.imageUrl = event.params.imageUrl
  entity.save()
}

export function handleUsernameChange(event: UsernameChange): void {
  let id = event.params._userId.toHex()

  let entity = _UserData.load(id)

  entity.userName = event.params._handle
  entity.save()
}

export function handleImageChange(event: ImageChange): void {
  let id = event.params._userId.toHex()

  let entity = _UserData.load(id)

  entity.imageUrl = event.params.imageUrl
  entity.save()
}
