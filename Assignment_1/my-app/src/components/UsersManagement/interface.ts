export interface UsersProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserManagementProps {
  data: UsersProps;
}
