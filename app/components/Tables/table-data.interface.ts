interface Member {
    id: string;
    name: string;
    verificationStatus: string;
    wallet:{
      balance:string
    }
    emailAddress: string;
    balance:string;
    mobileNumber: string;
    domain: string ;
    dateTimeCreated: string;
    dateTimeLastActive: string;
    status: string;
  }
  
  interface PageInfo {
    hasNextPage: boolean;
    endCursor: string;
    startCursor:string;
  }
  
 export interface MembersData {
    members: {
      edges: {
        node: Member;
      }[];
      pageInfo: PageInfo;
    };
    membersByName: Member[];

  }
  