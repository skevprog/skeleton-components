interface Company {
   name: string;
   catchPhrase: string;
   bs: string;
}

interface GeolocationObj {
   lat: string;
   lng: string;
}

interface Address {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
   geo: GeolocationObj;
}

interface User {
   id: number;
   name: string;
   email: string;
   address: Address
   phone: string;
   website: string;
   company: Company;
}
