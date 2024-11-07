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

export type UserLoginPayload = {
  data: {
    attributes: {
      email: string;
      password: string;
    };
  };
  meta: {
    deviceName: string;
  };
};

export type PayloadData = UserRegisterPayload | UserLoginPayload;
