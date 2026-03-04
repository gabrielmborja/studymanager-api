import userService from '../services/user.service.js';

class UserController {
  async create(req, res) {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso!",
        data: user
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        data: null
      });
    }
  }

  async listAll(req, res) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json({
        success: true,
        message: "Lista de usuários recuperada!",
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar usuários.",
        data: null
      });
    }
  }

  async show(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Usuário e cursos encontrados!",
        data: user
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
        data: null
      });
    }
  }

  // --- MÉTODO UPDATE ADICIONADO PARA O 10 ---
  async update(req, res) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      return res.status(200).json({
        success: true,
        message: "Usuário atualizado com sucesso!",
        data: user
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        data: null
      });
    }
  }

  async remove(req, res) {
    try {
      await userService.deleteUser(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Usuário deletado com sucesso!",
        data: null
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
        data: null
      });
    }
  }
}

export default new UserController();