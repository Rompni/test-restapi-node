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

    @Column()
    public tecnicoId!: number

    @Column()
    public servicioId!: number

    @ManyToOne( () => Tecnico, (tecnico) => tecnico.tecnicoToServicio )
    tecnico!: number

    @ManyToOne( () => Servicio, (servicio) => servicio.tecnicoToServicio )
    servicio!: number

    @Column({default: false})
    isFinished!: boolean

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

}