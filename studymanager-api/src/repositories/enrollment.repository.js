import prisma from '../config/prisma.js';

class EnrollmentRepository {
  async create(user_id, course_id) {
    return await prisma.enrollment.create({
      data: { 
        user_id: Number(user_id), 
        course_id: Number(course_id) 
      }
    });
  }

  async findExisting(user_id, course_id) {
    return await prisma.enrollment.findUnique({
      where: {
        user_id_course_id: {
          user_id: Number(user_id),
          course_id: Number(course_id)
        }
      }
    });
  }
}

export default new EnrollmentRepository();