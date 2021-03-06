import { 
     Column,
     Entity,
     PrimaryGeneratedColumn,
     CreateDateColumn ,
     UpdateDateColumn
} from "typeorm"

@Entity("categories")
 class Category{
   
    @PrimaryGeneratedColumn('increment')
    id!:string

    @Column()
    name!:string

    @CreateDateColumn()
    created_at!:Date

    @UpdateDateColumn()
    updated_at!:Date
}

export { Category }