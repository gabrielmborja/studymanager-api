import courseRepository from '../repositories/course.repository.js';

class CourseService {
  async createCourse(courseData) {
    return await courseRepository.create(courseData);
  }

  async getAllCourses() {
    return await courseRepository.findAll();
  }

  async getCourseById(id) {
    const course = await courseRepository.findById(id);
    if (!course) throw new Error('Curso não encontrado.');
    return course;
  }

  async updateCourse(id, data) {
    await this.getCourseById(id); 
    return await courseRepository.update(id, data);
  }

  async deleteCourse(id) {
    await this.getCourseById(id); 
    return await courseRepository.delete(id);
  }
}

export default new CourseService();