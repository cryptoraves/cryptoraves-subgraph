import { TransferSingle, TransferBatch, ApprovalForAll, URI} from '../generated/CryptoravesToken/CryptoravesToken'
import { _TransferSingle, _TransferBatch, _ApprovalForAll, _URI } from "../generated/schema"

//https://github.com/dao34/PRQ/blob/master/src/mapping.ts

export function handleTransferSingle(event: TransferSingle): void {
  let id = event.transaction.hash.toHex()

  let entity = _TransferSingle.load(id)
  if (entity == null) {
    entity = new _TransferSingle(id)
  }
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.cryptoravesTokenId = event.params.id
  entity.value = event.params.value
  entity.save()
}

export function handleTransferBatch(event: TransferBatch): void {
  let id = event.transaction.hash.toHex()

  let entity = _TransferBatch.load(id)
  if (entity == null) {
    entity = new _TransferBatch(id)
  }
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.cryptoravesTokenIds = event.params.ids
  entity.values = event.params.values
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAll): void {
  let id = event.transaction.hash.toHex()

  let entity = _ApprovalForAll.load(id)
  if (entity == null) {
    entity = new _ApprovalForAll(id)
  }
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleURI(event: URI): void {
  let id = event.transaction.hash.toHex()

  let entity = _URI.load(id)
  if (entity == null) {
    entity = new _URI(id)
  }
  entity.uri = event.params.value
  entity.cryptoravesTokenId = event.params.id
  entity.save()
}
