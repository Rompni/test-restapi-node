import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {SolicitudServicio} from "./SolicitudServicio";

@Entity()
export class Servicio extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @OneToMany( () => SolicitudServicio, solicitudServicio => solicitudServicio.servicio)
    tecnicoToServicio!: SolicitudServicio[];
}