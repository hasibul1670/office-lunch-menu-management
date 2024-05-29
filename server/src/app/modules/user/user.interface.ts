export type IUserFilterRequest = {
  searchTerm?: string | undefined;
  email?: string | undefined;
};

export type IUser = {
  id: string;
  email: string;
  role: string;
  needPasswordChange: boolean;
  createdAt: Date;
  updatedAt: Date;
};
