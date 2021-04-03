import { IBaseInfo } from './Base'

export interface IAccount extends IBaseInfo{
  type: string
  name: string
  gender: string
  nickname: string
  document: string
  email: string
  avatar: string
  biography: string
  date: Date
  status: string
  addressId: string
  mobileNumber: string
  fatherName: string
  motherName: string
  voterIdCard: string
  workPermit: string
  workPhone: string
  phoneNumber: string
  socialIdCard: string
  idCard: string
  idCardIssuer: string
  dateIdCard: Date
  driverLicense: string
  password: string
}
