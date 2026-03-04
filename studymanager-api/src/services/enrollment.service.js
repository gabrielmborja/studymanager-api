import enrollmentRepository from '../repositories/enrollment.repository.js';

class EnrollmentService {
  async enrollUser(user_id, course_id) {
    // 1. Verificar se o aluno já está matriculado nesse curso
    const alreadyEnrolled = await enrollmentRepository.findExisting(user_id, course_id);
    
    if (alreadyEnrolled) {
      throw new Error('Usuário já está matriculado neste curso.');
    }

    // 2. Se não estiver, realiza a matrícula
    return await enrollmentRepository.create(user_id, course_id);
  }
}

export default new EnrollmentService();