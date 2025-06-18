export {}

declare global {
  interface Window {
    google: any
    __googleMapsCallback__?: () => void
  }
  type userDataType = {
    id: string
    email: string
    name: string
    password: string
    roles: string
    isVerified: boolean
    createdDate: string
    updatedDate: string
    photo: string
  }
  type auditDataType = {
    id: string
    entityName: string
    entityId: string
    fieldName: string
    fieldValue: string
    userId: string
    createdDate: string
    user?: userDataType
  }
  type streamDataType = {
    id: string
    url: string
    userId: string
    inactive: boolean
    user?: any
    createdDate: string
    updatedDate: string
  }
  type liveDataType = {
    id: string
    path: string
    streamId: string
    stream?: streamDataType
    userId: string
    user?: userDataType
    report?: any
    expiryDate: string
    expiryTimeInMinutes: number
    createdDate: string
    updatedDate: string
  }
  type extendedUserDataType = userDataType & { authenticationId: string }
  type cookieType = 'credentials' | (string & {})
  type latLngType = {
    latitude: string
    longitude: string
  }
  type DropdownType = {
    label: string
    value: string
  }
  type AxiosResponseResult<T> = {
    success: boolean
    result?: T
    message?: T
  }
}
