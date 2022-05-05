import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Tecnico} from "./Tecnico";
import {Servicio} from "./Servicio";

@Entity()
export class SolicitudServicio extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    token!: string

    @ManyToOne( () => Tecnico, (tecnico) => tecnico.tecnicoToServicio )
    tecnico!: number

    @ManyToOne( () => Servicio, (servicio) => servicio.tecnicoToServicio )
    servicio!: number

    @Column()
    active!: boolean

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

}