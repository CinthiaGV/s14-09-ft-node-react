type Status = 'online' | 'offline'
export interface User {
  name: string
  profile_picture?: string | null
  description?:string|null
  status: Status
}

export interface Message {
  sender: User
  text: string
  timestamp: string
  read: boolean
}

export interface Conversation {
  recipient: User
  messages: Message[] 
}

export interface IUserConversations {
  user: User;
  conversations: Conversation[];
}

export interface IConversationArea extends Pick<IUserConversations, 'conversations'> {
}

export interface IConversation {
  conversation: Conversation
}

export interface IMessages {
  messages:Message[]
}

export interface IUserProfile {
  user: User
}

export interface ILastSentMessage {
  message: Message
}

export interface IProfilePhoto extends Pick<User, 'profile_picture'> {}

export interface INoProfilePhoto extends Pick<User, 'name'> {}