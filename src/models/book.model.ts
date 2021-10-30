import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "book"})
export class Book {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string
    
    @Column()
    title: string
    
    @Column()
    description: string
    
    @Column()
    page: number

    @Column({name: 'image_path'})
    imagePath: string
}