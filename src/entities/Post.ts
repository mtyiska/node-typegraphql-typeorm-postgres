import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";

import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column({
    type: "text",
  })
  content!: string;

  @Column({ nullable: true })
  userId!: string;
  @ManyToOne((_type) => User, (user: User) => user.posts)
  @JoinColumn()
  user!: User;

  @OneToMany((_type) => Comment, (comment: Comment) => comment.post)
  comments!: Array<Comment>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}