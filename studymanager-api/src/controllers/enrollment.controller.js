import enrollmentService from '../services/enrollment.service.js';

class EnrollmentController {
  async store(req, res) {
    try {
      const { user_id, course_id } = req.body;
      const enrollment = await enrollmentService.enrollUser(user_id, course_id);
      
      return res.status(201).json({
        success: true,
        message: "Matrícula realizada com sucesso!",
        data: enrollment
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        data: null
      });
    }
  }
}

export default new EnrollmentController();