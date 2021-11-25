export interface RequestDataMapper {
  entityToRequest (data: any): any
}

export interface ResponseDataMapper {
  requestToEntity (data: any): any
}
