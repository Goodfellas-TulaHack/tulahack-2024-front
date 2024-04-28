export type FilterRestoran = FilterRestoranResponse;

export type SearchRestoranResponse = {
  id: string;
  title: string;
  subtitle: string;
  address: string;
  kitchen: string;
  raiting: number;
};

export type FilterRestoranResponse = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  userId: string;
  user: {
    id: "2f3c5a29-0c1e-48c2-b796-902d1742e933";
    login: "string";
    role: 0;
    firstName: "string";
    lastName: "string";
    middleName: "string";
    phone: "string";
  };
  address: string;
  kitchen: string;
  menuIds: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"];
  photos: string[];
  raiting: number;
  startWorkTime: string;
  endWorkTime: string;
  schemeId: string;
};
export type User = {
  firstName: string;
  lastName: string;
};

export type NotificationResponse = {
  description: string;
  user: User;
};
