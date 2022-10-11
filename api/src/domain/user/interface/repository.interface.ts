export interface UserRepository {
  find: () => Promise<void>;
}
