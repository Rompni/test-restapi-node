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
export class Tecnico extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!: string

    @Column({
        default: true
    })
    active!: boolean

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @OneToMany( () => SolicitudServicio, solicitudServicio => solicitudServicio.tecnico)
    tecnicoToServicio!: SolicitudServicio[];
}