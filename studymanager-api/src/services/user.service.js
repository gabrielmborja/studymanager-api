import userRepository from '../repositories/user.repository.js';

class UserService {
  async createUser(data) {
    const userExists = await userRepository.findByEmail(data.email);
    if (userExists) {
      throw new Error('Este e-mail já está em uso.');
    }
    return await userRepository.create(data);
  }

  async getAllUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }
    return user;
  }

  async updateUser(id, data) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado para atualização.');
    }
    return await userRepository.update(id, data);
  }

  async deleteUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error('Usuário não encontrado para exclusão.');
    }
    return await userRepository.delete(id);
  }
}

export default new UserService();