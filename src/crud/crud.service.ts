import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Crud } from './entities/crud.entity';

@Injectable()
export class CrudService {
  constructor(@InjectRepository(Crud) private userRepo: Repository<Crud>) {}
   create(createCrudDto: CreateCrudDto) {
    const createUser =  this.userRepo.create(createCrudDto);
    console.log("createUser", createUser)
    return this.userRepo.save(createUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: string) {
    return this.userRepo.findOne(id);
  }

  update(id: string, updateCrudDto: UpdateCrudDto) {
    return this.userRepo.update(id, updateCrudDto);
  }

  remove(id: string) {
    return this.userRepo.delete(id);
  }
}
