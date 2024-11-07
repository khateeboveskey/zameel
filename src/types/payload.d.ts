export type UserRegisterPayload = {
  data: {
    type: string;
    attributes: {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
    };
  };
};

export type PayloadData = UserRegisterPayload;
