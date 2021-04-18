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

export class ImageChange extends ethereum.Event {
  get params(): ImageChange__Params {
    return new ImageChange__Params(this);
  }
}

export class ImageChange__Params {
  _event: ImageChange;

  constructor(event: ImageChange) {
    this._event = event;
  }

  get _cryptoravesAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get imageUrl(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class UserData extends ethereum.Event {
  get params(): UserData__Params {
    return new UserData__Params(this);
  }
}

export class UserData__Params {
  _event: UserData;

  constructor(event: UserData) {
    this._event = event;
  }

  get param0(): UserDataParam0Struct {
    return this._event.parameters[0].value.toTuple() as UserDataParam0Struct;
  }
}

export class UserDataParam0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class UsernameChange extends ethereum.Event {
  get params(): UsernameChange__Params {
    return new UsernameChange__Params(this);
  }
}

export class UsernameChange__Params {
  _event: UsernameChange;

  constructor(event: UsernameChange) {
    this._event = event;
  }

  get _cryptoravesAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _handle(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class UserManagement__usersResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: string;
  value4: boolean;
  value5: boolean;
  value6: boolean;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: string,
    value4: boolean,
    value5: boolean,
    value6: boolean,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class UserManagement__getUserStructResultValue0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class UserManagement__launchL2AccountResultValue0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class UserManagement__userAccountCheckResultValue0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class UserManagement__getUserResultValue0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class UserManagement extends ethereum.SmartContract {
  static bind(address: Address): UserManagement {
    return new UserManagement("UserManagement", address);
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

  layerOneAccounts(param0: Address): Address {
    let result = super.call(
      "layerOneAccounts",
      "layerOneAccounts(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_layerOneAccounts(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "layerOneAccounts",
      "layerOneAccounts(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  layerTwoAccounts(param0: Address): Address {
    let result = super.call(
      "layerTwoAccounts",
      "layerTwoAccounts(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_layerTwoAccounts(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "layerTwoAccounts",
      "layerTwoAccounts(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userAccounts(param0: Address): BigInt {
    let result = super.call("userAccounts", "userAccounts(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_userAccounts(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userAccounts",
      "userAccounts(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userIDs(param0: string): BigInt {
    let result = super.call("userIDs", "userIDs(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBigInt();
  }

  try_userIDs(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("userIDs", "userIDs(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  users(param0: BigInt): UserManagement__usersResult {
    let result = super.call(
      "users",
      "users(uint256):(uint256,address,string,string,bool,bool,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new UserManagement__usersResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBoolean(),
      result[7].toBigInt()
    );
  }

  try_users(param0: BigInt): ethereum.CallResult<UserManagement__usersResult> {
    let result = super.tryCall(
      "users",
      "users(uint256):(uint256,address,string,string,bool,bool,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new UserManagement__usersResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBoolean(),
        value[7].toBigInt()
      )
    );
  }

  getUserId(_account: Address): BigInt {
    let result = super.call("getUserId", "getUserId(address):(uint256)", [
      ethereum.Value.fromAddress(_account)
    ]);

    return result[0].toBigInt();
  }

  try_getUserId(_account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getUserId", "getUserId(address):(uint256)", [
      ethereum.Value.fromAddress(_account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUserAccount(_platformUserId: BigInt): Address {
    let result = super.call(
      "getUserAccount",
      "getUserAccount(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_platformUserId)]
    );

    return result[0].toAddress();
  }

  try_getUserAccount(_platformUserId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getUserAccount",
      "getUserAccount(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_platformUserId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUserStruct(
    _platformUserId: BigInt
  ): UserManagement__getUserStructResultValue0Struct {
    let result = super.call(
      "getUserStruct",
      "getUserStruct(uint256):((uint256,address,string,string,bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_platformUserId)]
    );

    return result[0].toTuple() as UserManagement__getUserStructResultValue0Struct;
  }

  try_getUserStruct(
    _platformUserId: BigInt
  ): ethereum.CallResult<UserManagement__getUserStructResultValue0Struct> {
    let result = super.tryCall(
      "getUserStruct",
      "getUserStruct(uint256):((uint256,address,string,string,bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_platformUserId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as UserManagement__getUserStructResultValue0Struct
    );
  }

  launchL2Account(
    _userId: BigInt,
    _twitterHandleFrom: string,
    _imageUrl: string
  ): UserManagement__launchL2AccountResultValue0Struct {
    let result = super.call(
      "launchL2Account",
      "launchL2Account(uint256,string,string):((uint256,address,string,string,bool,bool,bool,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(_userId),
        ethereum.Value.fromString(_twitterHandleFrom),
        ethereum.Value.fromString(_imageUrl)
      ]
    );

    return result[0].toTuple() as UserManagement__launchL2AccountResultValue0Struct;
  }

  try_launchL2Account(
    _userId: BigInt,
    _twitterHandleFrom: string,
    _imageUrl: string
  ): ethereum.CallResult<UserManagement__launchL2AccountResultValue0Struct> {
    let result = super.tryCall(
      "launchL2Account",
      "launchL2Account(uint256,string,string):((uint256,address,string,string,bool,bool,bool,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(_userId),
        ethereum.Value.fromString(_twitterHandleFrom),
        ethereum.Value.fromString(_imageUrl)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as UserManagement__launchL2AccountResultValue0Struct
    );
  }

  getLayerOneAccount(_l2Addr: Address): Address {
    let result = super.call(
      "getLayerOneAccount",
      "getLayerOneAccount(address):(address)",
      [ethereum.Value.fromAddress(_l2Addr)]
    );

    return result[0].toAddress();
  }

  try_getLayerOneAccount(_l2Addr: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLayerOneAccount",
      "getLayerOneAccount(address):(address)",
      [ethereum.Value.fromAddress(_l2Addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLayerTwoAccount(_l1Addr: Address): Address {
    let result = super.call(
      "getLayerTwoAccount",
      "getLayerTwoAccount(address):(address)",
      [ethereum.Value.fromAddress(_l1Addr)]
    );

    return result[0].toAddress();
  }

  try_getLayerTwoAccount(_l1Addr: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getLayerTwoAccount",
      "getLayerTwoAccount(address):(address)",
      [ethereum.Value.fromAddress(_l1Addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userAccountCheck(
    _platformUserId: BigInt,
    _twitterHandle: string,
    _imageUrl: string
  ): UserManagement__userAccountCheckResultValue0Struct {
    let result = super.call(
      "userAccountCheck",
      "userAccountCheck(uint256,string,string):((uint256,address,string,string,bool,bool,bool,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(_platformUserId),
        ethereum.Value.fromString(_twitterHandle),
        ethereum.Value.fromString(_imageUrl)
      ]
    );

    return result[0].toTuple() as UserManagement__userAccountCheckResultValue0Struct;
  }

  try_userAccountCheck(
    _platformUserId: BigInt,
    _twitterHandle: string,
    _imageUrl: string
  ): ethereum.CallResult<UserManagement__userAccountCheckResultValue0Struct> {
    let result = super.tryCall(
      "userAccountCheck",
      "userAccountCheck(uint256,string,string):((uint256,address,string,string,bool,bool,bool,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(_platformUserId),
        ethereum.Value.fromString(_twitterHandle),
        ethereum.Value.fromString(_imageUrl)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as UserManagement__userAccountCheckResultValue0Struct
    );
  }

  userHasL1AddressMapped(_userCryptoravesAddr: Address): boolean {
    let result = super.call(
      "userHasL1AddressMapped",
      "userHasL1AddressMapped(address):(bool)",
      [ethereum.Value.fromAddress(_userCryptoravesAddr)]
    );

    return result[0].toBoolean();
  }

  try_userHasL1AddressMapped(
    _userCryptoravesAddr: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "userHasL1AddressMapped",
      "userHasL1AddressMapped(address):(bool)",
      [ethereum.Value.fromAddress(_userCryptoravesAddr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isUser(_userId: BigInt): boolean {
    let result = super.call("isUser", "isUser(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_userId)
    ]);

    return result[0].toBoolean();
  }

  try_isUser(_userId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isUser", "isUser(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_userId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getUser(_userId: BigInt): UserManagement__getUserResultValue0Struct {
    let result = super.call(
      "getUser",
      "getUser(uint256):((uint256,address,string,string,bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_userId)]
    );

    return result[0].toTuple() as UserManagement__getUserResultValue0Struct;
  }

  try_getUser(
    _userId: BigInt
  ): ethereum.CallResult<UserManagement__getUserResultValue0Struct> {
    let result = super.tryCall(
      "getUser",
      "getUser(uint256):((uint256,address,string,string,bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_userId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as UserManagement__getUserResultValue0Struct
    );
  }

  getUserIdByPlatformHandle(_platformHandle: string): BigInt {
    let result = super.call(
      "getUserIdByPlatformHandle",
      "getUserIdByPlatformHandle(string):(uint256)",
      [ethereum.Value.fromString(_platformHandle)]
    );

    return result[0].toBigInt();
  }

  try_getUserIdByPlatformHandle(
    _platformHandle: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUserIdByPlatformHandle",
      "getUserIdByPlatformHandle(string):(uint256)",
      [ethereum.Value.fromString(_platformHandle)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  dropState(_platformUserId: BigInt): boolean {
    let result = super.call("dropState", "dropState(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_platformUserId)
    ]);

    return result[0].toBoolean();
  }

  try_dropState(_platformUserId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("dropState", "dropState(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(_platformUserId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  setDropState(_platformUserId: BigInt, _state: boolean): Address {
    let result = super.call(
      "setDropState",
      "setDropState(uint256,bool):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_platformUserId),
        ethereum.Value.fromBoolean(_state)
      ]
    );

    return result[0].toAddress();
  }

  try_setDropState(
    _platformUserId: BigInt,
    _state: boolean
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "setDropState",
      "setDropState(uint256,bool):(address)",
      [
        ethereum.Value.fromUnsignedBigInt(_platformUserId),
        ethereum.Value.fromBoolean(_state)
      ]
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

export class LaunchL2AccountCall extends ethereum.Call {
  get inputs(): LaunchL2AccountCall__Inputs {
    return new LaunchL2AccountCall__Inputs(this);
  }

  get outputs(): LaunchL2AccountCall__Outputs {
    return new LaunchL2AccountCall__Outputs(this);
  }
}

export class LaunchL2AccountCall__Inputs {
  _call: LaunchL2AccountCall;

  constructor(call: LaunchL2AccountCall) {
    this._call = call;
  }

  get _userId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _twitterHandleFrom(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _imageUrl(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class LaunchL2AccountCall__Outputs {
  _call: LaunchL2AccountCall;

  constructor(call: LaunchL2AccountCall) {
    this._call = call;
  }

  get value0(): LaunchL2AccountCallValue0Struct {
    return this._call.outputValues[0].value.toTuple() as LaunchL2AccountCallValue0Struct;
  }
}

export class LaunchL2AccountCallValue0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class MapLayerOneAccountCall extends ethereum.Call {
  get inputs(): MapLayerOneAccountCall__Inputs {
    return new MapLayerOneAccountCall__Inputs(this);
  }

  get outputs(): MapLayerOneAccountCall__Outputs {
    return new MapLayerOneAccountCall__Outputs(this);
  }
}

export class MapLayerOneAccountCall__Inputs {
  _call: MapLayerOneAccountCall;

  constructor(call: MapLayerOneAccountCall) {
    this._call = call;
  }

  get _l2Addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _l1Addr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MapLayerOneAccountCall__Outputs {
  _call: MapLayerOneAccountCall;

  constructor(call: MapLayerOneAccountCall) {
    this._call = call;
  }
}

export class UserAccountCheckCall extends ethereum.Call {
  get inputs(): UserAccountCheckCall__Inputs {
    return new UserAccountCheckCall__Inputs(this);
  }

  get outputs(): UserAccountCheckCall__Outputs {
    return new UserAccountCheckCall__Outputs(this);
  }
}

export class UserAccountCheckCall__Inputs {
  _call: UserAccountCheckCall;

  constructor(call: UserAccountCheckCall) {
    this._call = call;
  }

  get _platformUserId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _twitterHandle(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _imageUrl(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class UserAccountCheckCall__Outputs {
  _call: UserAccountCheckCall;

  constructor(call: UserAccountCheckCall) {
    this._call = call;
  }

  get value0(): UserAccountCheckCallValue0Struct {
    return this._call.outputValues[0].value.toTuple() as UserAccountCheckCallValue0Struct;
  }
}

export class UserAccountCheckCallValue0Struct extends ethereum.Tuple {
  get twitterUserId(): BigInt {
    return this[0].toBigInt();
  }

  get cryptoravesAddress(): Address {
    return this[1].toAddress();
  }

  get twitterHandle(): string {
    return this[2].toString();
  }

  get imageUrl(): string {
    return this[3].toString();
  }

  get isManaged(): boolean {
    return this[4].toBoolean();
  }

  get isUser(): boolean {
    return this[5].toBoolean();
  }

  get dropped(): boolean {
    return this[6].toBoolean();
  }

  get tokenId(): BigInt {
    return this[7].toBigInt();
  }
}

export class SetDropStateCall extends ethereum.Call {
  get inputs(): SetDropStateCall__Inputs {
    return new SetDropStateCall__Inputs(this);
  }

  get outputs(): SetDropStateCall__Outputs {
    return new SetDropStateCall__Outputs(this);
  }
}

export class SetDropStateCall__Inputs {
  _call: SetDropStateCall;

  constructor(call: SetDropStateCall) {
    this._call = call;
  }

  get _platformUserId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _state(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetDropStateCall__Outputs {
  _call: SetDropStateCall;

  constructor(call: SetDropStateCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
