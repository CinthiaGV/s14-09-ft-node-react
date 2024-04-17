export interface User {
  name: string
  profile_picture?: string | null
  description?:string|null
}

export interface Message {
  sender: User;
  content: { text: string; timestamp: string }[];
}

export interface Props {
  user: User;
  messages: Message[];
}

export interface IMessages {
  messages:Message[]
}

export interface IUserProfile {
  user: User
}

export interface IMessage {
  message: Message
}

export interface IProfilePhoto extends Pick<User, 'profile_picture'> {}

export interface INoProfilePhoto extends Pick<User, 'name'> {}