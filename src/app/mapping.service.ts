import { Injectable } from '@angular/core';

@Injectable()
export class MappingService {

  constructor() { }
  getParticipantObjectFromServer(obj){
    let temp = {
      "addressLine1":obj.addr1,
      "addressLine2":obj.addr2,
      "age":obj.age,
      "bloodGrp":obj.bloodgroup,
      "city":obj.city,
      "dob": obj.dob,
      "emailId":obj.email,
      "emerPhone":obj.alternativeno,
      "fname":obj.firstname,
      "gender":obj.gender,
      "idInt":obj.identitynumber,
      "idType":obj.identitytype,
      "lname":obj.lastname,
      "mname":obj.middlename,
      "phone":obj.contactno,
      "pincode":obj.pincode,
      "school":obj.nameOfSchoolOrClub,
      "schoolAddressLine1":obj.addressOfSchoolOrClub,
      "schoolAddressLine2":obj.address2OfSchoolOrClub,
      "schoolCity":obj.schoolcity,
      "schoolPincode":obj.schoolpincode,
      "schoolState":obj.schoolstate,
      "state":obj.state
   };
    return temp;
  }
  getParticipantObjectForClient(obj){
    let temp = 	{
      "addr1":obj.addressLine1,
      "addr2":obj.addressLine2e,
      "age":obj.age,
      "bloodgroup":obj.bloodGrp,
      "city":obj.city,
      "dob": obj.dob,
      "email":obj.emailId,
      "alternativeno":obj.emerPhone,
      "firstname":obj.fname,
      "gender":obj.gender,
      "identitynumber":obj.idInt,
      "identitytype":obj.idType,
      "lastname":obj.lname,
      "middlename":obj.mname,
      "contactno":obj.phone,
      "pincode":obj.pincode,
      "nameOfSchoolOrClub":obj.school,
      "addressOfSchoolOrClub":obj.schoolAddressLine1,
      "address2OfSchoolOrClub":obj.schoolAddressLine2,
      "schoolcity":obj.schoolCity,
      "schoolpincode":obj.schoolPincode,
      "schoolstate":obj.schoolState,
      "state":obj.state
   };
    return temp;
  }
  getGameListForClient(gameObj){
    let temp = []
    for(let i = 0; i < gameObj.length ; i++){
      let obj = {
        "eventid": gameObj[i].gameId,
        "text":  gameObj[i].event,
        "minage":  gameObj[i].ageGrp,
        "name":  gameObj[i].discipline
      }
      temp.push(obj);
    }
    return temp;
  }
}
