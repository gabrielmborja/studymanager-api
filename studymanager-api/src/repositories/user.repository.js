import prisma from '../config/prisma.js';

class UserRepository {
  async create(data) {
    return await prisma.user.create({ data });
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: { id: Number(id) },
      include: {
        enrollments: {
          include: {
            course: true 
          }
        }
      }
    });
  }

  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { id: Number(id) },
      data
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { id: Number(id) }
    });
  }
}

export default new UserRepository();