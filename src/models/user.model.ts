import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "user" })
export class User {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string
}