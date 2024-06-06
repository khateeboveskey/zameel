import Request from '@/services/requestService';
import type { Model } from '@/types/model';

class User extends Request implements Model {
  private static endpoint = '/users';
  constructor() {
    super(User.endpoint);
  }
}

export default new User();
