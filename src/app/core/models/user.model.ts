export interface IUser {
  userId: number;
  userName?: string;
  userSurname?: string;
  userBirthday: string;
  userEmailAddress?: string;
  userPassword?: string;
  userPhoneNumber?: string;
  userPersonalId?: string;
  userAddressId?: number;
  userProfileImage: string;
  userLastTravelDate?: string;
  userEmailVerified?: boolean;
  userIsAdmin?: boolean;
  userTermsAgreement?: boolean;
  dateOfRegister?: string;
  lastModifiedDate: string;
  author?: string;
  isLoading?: boolean;
  hasBeenChanged?: boolean;
  changeMessage?: string;
}
