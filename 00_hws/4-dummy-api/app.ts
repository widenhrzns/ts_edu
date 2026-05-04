enum Gender {
  FEMALE = "female",
  MALE = "male",
}

enum HairType {
  STRAIGHT = "Straight",
  CURLY = "Curly",
  WAVY = "Wavy",
}

enum UserRole {
  ADMIN = "admin",
  MODERATOR = "moderator",
  USER = "user",
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}

interface Hair {
  color: string;
  type: HairType;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

async function getUsers(): Promise<void> {
  try {
    const response = await fetch("https://dummyjson.com/users");

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const users: User[] = data.users;
    console.log(users);
  } catch (error) {
    console.warn(error);
  }
}

getUsers();
