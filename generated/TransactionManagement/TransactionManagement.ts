// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ErrorHandled extends ethereum.Event {
  get params(): ErrorHandled__Params {
    return new ErrorHandled__Params(this);
  }
}

export class ErrorHandled__Params {
  _event: ErrorHandled;

  constructor(event: ErrorHandled) {
    this._event = event;
  }

  get reason(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class HeresMyAddress extends ethereum.Event {
  get params(): HeresMyAddress__Params {
    return new HeresMyAddress__Params(this);
  }
}

export class HeresMyAddress__Params {
  _event: HeresMyAddress;

  constructor(event: HeresMyAddress) {
    this._event = event;
  }

  get _layer1Address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _walletContractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewAdministrator extends ethereum.Event {
  get params(): NewAdministrator__Params {
    return new NewAdministrator__Params(this);
  }
}

export class NewAdministrator__Params {
  _event: NewAdministrator;

  constructor(event: NewAdministrator) {
    this._event = event;
  }

  get _newAdminAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _fromContractAddr(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemovedAdministrator extends ethereum.Event {
  get params(): RemovedAdministrator__Params {
    return new RemovedAdministrator__Params(this);
  }
}

export class RemovedAdministrator__Params {
  _event: RemovedAdministrator;

  constructor(event: RemovedAdministrator) {
    this._event = event;
  }

  get _oldAdminAddr(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _fromContractAddr(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransactionManagement extends ethereum.SmartContract {
  static bind(address: Address): TransactionManagement {
    return new TransactionManagement("TransactionManagement", address);
  }

  getTransactionManagerAddress(): Address {
    let result = super.call(
      "getTransactionManagerAddress",
      "getTransactionManagerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTransactionManagerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTransactionManagerAddress",
      "getTransactionManagerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isAdministrator(_addr: Address): boolean {
    let result = super.call(
      "isAdministrator",
      "isAdministrator(address):(bool)",
      [ethereum.Value.fromAddress(_addr)]
    );

    return result[0].toBoolean();
  }

  try_isAdministrator(_addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAdministrator",
      "isAdministrator(address):(bool)",
      [ethereum.Value.fromAddress(_addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAvailable(): boolean {
    let result = super.call("isAvailable", "isAvailable():(bool)", []);

    return result[0].toBoolean();
  }

  try_isAvailable(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAvailable", "isAvailable():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  testForTransactionManagementAddressUniquely(): boolean {
    let result = super.call(
      "testForTransactionManagementAddressUniquely",
      "testForTransactionManagementAddressUniquely():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_testForTransactionManagementAddressUniquely(): ethereum.CallResult<
    boolean
  > {
    let result = super.tryCall(
      "testForTransactionManagementAddressUniquely",
      "testForTransactionManagementAddressUniquely():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getTokenManagementAddress(): Address {
    let result = super.call(
      "getTokenManagementAddress",
      "getTokenManagementAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getTokenManagementAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTokenManagementAddress",
      "getTokenManagementAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserManagementAddress(): Address {
    let result = super.call(
      "getUserManagementAddress",
      "getUserManagementAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getUserManagementAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserManagementAddress",
      "getUserManagementAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCryptoravesTokenAddress(): Address {
    let result = super.call(
      "getCryptoravesTokenAddress",
      "getCryptoravesTokenAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getCryptoravesTokenAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getCryptoravesTokenAddress",
      "getCryptoravesTokenAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  initCommand(
    _twitterInts: Array<BigInt>,
    _twitterStrings: Array<string>,
    _metaData: Array<Bytes>,
    _functionData: Bytes
  ): boolean {
    let result = super.call(
      "initCommand",
      "initCommand(uint256[],string[],bytes[],bytes):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(_twitterInts),
        ethereum.Value.fromStringArray(_twitterStrings),
        ethereum.Value.fromBytesArray(_metaData),
        ethereum.Value.fromBytes(_functionData)
      ]
    );

    return result[0].toBoolean();
  }

  try_initCommand(
    _twitterInts: Array<BigInt>,
    _twitterStrings: Array<string>,
    _metaData: Array<Bytes>,
    _functionData: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "initCommand",
      "initCommand(uint256[],string[],bytes[],bytes):(bool)",
      [
        ethereum.Value.fromUnsignedBigIntArray(_twitterInts),
        ethereum.Value.fromStringArray(_twitterStrings),
        ethereum.Value.fromBytesArray(_metaData),
        ethereum.Value.fromBytes(_functionData)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getTokenIdFromPlatformId(_platformId: BigInt): BigInt {
    let result = super.call(
      "getTokenIdFromPlatformId",
      "getTokenIdFromPlatformId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_platformId)]
    );

    return result[0].toBigInt();
  }

  try_getTokenIdFromPlatformId(
    _platformId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenIdFromPlatformId",
      "getTokenIdFromPlatformId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_platformId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserL1AccountFromL2Account(_l2: Address): Address {
    let result = super.call(
      "getUserL1AccountFromL2Account",
      "getUserL1AccountFromL2Account(address):(address)",
      [ethereum.Value.fromAddress(_l2)]
    );

    return result[0].toAddress();
  }

  try_getUserL1AccountFromL2Account(
    _l2: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserL1AccountFromL2Account",
      "getUserL1AccountFromL2Account(address):(address)",
      [ethereum.Value.fromAddress(_l2)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserL2AccountFromL1Account(_l1: Address): Address {
    let result = super.call(
      "getUserL2AccountFromL1Account",
      "getUserL2AccountFromL1Account(address):(address)",
      [ethereum.Value.fromAddress(_l1)]
    );

    return result[0].toAddress();
  }

  try_getUserL2AccountFromL1Account(
    _l1: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserL2AccountFromL1Account",
      "getUserL2AccountFromL1Account(address):(address)",
      [ethereum.Value.fromAddress(_l1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  testDownstreamAdminConfiguration(): boolean {
    let result = super.call(
      "testDownstreamAdminConfiguration",
      "testDownstreamAdminConfiguration():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_testDownstreamAdminConfiguration(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "testDownstreamAdminConfiguration",
      "testDownstreamAdminConfiguration():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _tokenManagementAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _userManagementAddr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetAdministratorCall extends ethereum.Call {
  get inputs(): SetAdministratorCall__Inputs {
    return new SetAdministratorCall__Inputs(this);
  }

  get outputs(): SetAdministratorCall__Outputs {
    return new SetAdministratorCall__Outputs(this);
  }
}

export class SetAdministratorCall__Inputs {
  _call: SetAdministratorCall;

  constructor(call: SetAdministratorCall) {
    this._call = call;
  }

  get _newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAdministratorCall__Outputs {
  _call: SetAdministratorCall;

  constructor(call: SetAdministratorCall) {
    this._call = call;
  }
}

export class UnsetAdministratorCall extends ethereum.Call {
  get inputs(): UnsetAdministratorCall__Inputs {
    return new UnsetAdministratorCall__Inputs(this);
  }

  get outputs(): UnsetAdministratorCall__Outputs {
    return new UnsetAdministratorCall__Outputs(this);
  }
}

export class UnsetAdministratorCall__Inputs {
  _call: UnsetAdministratorCall;

  constructor(call: UnsetAdministratorCall) {
    this._call = call;
  }

  get _oldAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnsetAdministratorCall__Outputs {
  _call: UnsetAdministratorCall;

  constructor(call: UnsetAdministratorCall) {
    this._call = call;
  }
}

export class SetTokenManagementAddressCall extends ethereum.Call {
  get inputs(): SetTokenManagementAddressCall__Inputs {
    return new SetTokenManagementAddressCall__Inputs(this);
  }

  get outputs(): SetTokenManagementAddressCall__Outputs {
    return new SetTokenManagementAddressCall__Outputs(this);
  }
}

export class SetTokenManagementAddressCall__Inputs {
  _call: SetTokenManagementAddressCall;

  constructor(call: SetTokenManagementAddressCall) {
    this._call = call;
  }

  get _newAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenManagementAddressCall__Outputs {
  _call: SetTokenManagementAddressCall;

  constructor(call: SetTokenManagementAddressCall) {
    this._call = call;
  }
}

export class SetUserManagementAddressCall extends ethereum.Call {
  get inputs(): SetUserManagementAddressCall__Inputs {
    return new SetUserManagementAddressCall__Inputs(this);
  }

  get outputs(): SetUserManagementAddressCall__Outputs {
    return new SetUserManagementAddressCall__Outputs(this);
  }
}

export class SetUserManagementAddressCall__Inputs {
  _call: SetUserManagementAddressCall;

  constructor(call: SetUserManagementAddressCall) {
    this._call = call;
  }

  get _newAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetUserManagementAddressCall__Outputs {
  _call: SetUserManagementAddressCall;

  constructor(call: SetUserManagementAddressCall) {
    this._call = call;
  }
}

export class InitCommandCall extends ethereum.Call {
  get inputs(): InitCommandCall__Inputs {
    return new InitCommandCall__Inputs(this);
  }

  get outputs(): InitCommandCall__Outputs {
    return new InitCommandCall__Outputs(this);
  }
}

export class InitCommandCall__Inputs {
  _call: InitCommandCall;

  constructor(call: InitCommandCall) {
    this._call = call;
  }

  get _twitterInts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _twitterStrings(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get _metaData(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get _functionData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class InitCommandCall__Outputs {
  _call: InitCommandCall;

  constructor(call: InitCommandCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ResetTokenDropCall extends ethereum.Call {
  get inputs(): ResetTokenDropCall__Inputs {
    return new ResetTokenDropCall__Inputs(this);
  }

  get outputs(): ResetTokenDropCall__Outputs {
    return new ResetTokenDropCall__Outputs(this);
  }
}

export class ResetTokenDropCall__Inputs {
  _call: ResetTokenDropCall;

  constructor(call: ResetTokenDropCall) {
    this._call = call;
  }

  get _platformUserId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ResetTokenDropCall__Outputs {
  _call: ResetTokenDropCall;

  constructor(call: ResetTokenDropCall) {
    this._call = call;
  }
}