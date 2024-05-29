interface ISelectedItem {
  userId: number;
  date: Date;
  menuId?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}


interface User {
  id: number;
}

interface Menu {
  id: number;
  // other fields for the Menu model
}
