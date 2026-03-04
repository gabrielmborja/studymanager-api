import prisma from '../config/prisma.js';

class CourseRepository {
  async create(data) {
    return await prisma.course.create({ data });
  }

  async findAll() {
    return await prisma.course.findMany();
  }

  async findById(id) {
    return await prisma.course.findUnique({ where: { id: Number(id) } });
  }

  async update(id, data) {
    return await prisma.course.update({
      where: { id: Number(id) },
      data
    });
  }

  async delete(id) {
    return await prisma.course.delete({ where: { id: Number(id) } });
  }
}

export default new CourseRepository();