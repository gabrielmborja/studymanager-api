import courseService from '../services/course.service.js';

class CourseController {
  // Criar curso
  async create(req, res) {
    try {
      const course = await courseService.createCourse(req.body);
      return res.status(201).json({ 
        success: true, 
        message: "Curso criado com sucesso!", 
        data: course 
      });
    } catch (error) {
      return res.status(400).json({ 
        success: false, 
        message: error.message, 
        data: null 
      });
    }
  }

  // Listar todos os cursos
  async listAll(req, res) {
    try {
      const courses = await courseService.getAllCourses();
      return res.status(200).json({ 
        success: true, 
        message: "Cursos recuperados!", 
        data: courses 
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: error.message, 
        data: null 
      });
    }
  }

  // Buscar curso por ID
  async show(req, res) {
    try {
      const course = await courseService.getCourseById(req.params.id);
      return res.status(200).json({ 
        success: true, 
        message: "Curso encontrado!", 
        data: course 
      });
    } catch (error) {
      return res.status(404).json({ 
        success: false, 
        message: error.message, 
        data: null 
      });
    }
  }

  // Atualizar curso
  async update(req, res) {
    try {
      const course = await courseService.updateCourse(req.params.id, req.body);
      return res.status(200).json({ 
        success: true, 
        message: "Curso atualizado com sucesso!", 
        data: course 
      });
    } catch (error) {
      return res.status(400).json({ 
        success: false, 
        message: error.message, 
        data: null 
      });
    }
  }

  // Deletar curso
  async remove(req, res) {
    try {
      await courseService.deleteCourse(req.params.id);
      return res.status(200).json({ 
        success: true, 
        message: "Curso deletado com sucesso!", 
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

export default new CourseController();