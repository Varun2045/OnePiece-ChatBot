export type MessageRole = "user" | "assistant";

export type MessageStatus = "sending" | "sent" | "delivered" | "read";

export interface MessageReaction {
  emoji: string;
  count: number;
}

export interface Message {
  role: MessageRole;
  content: string;
  timestamp?: Date;
  reactions?: MessageReaction[];
  status?: MessageStatus;
  readAt?: Date;
  id: string;
  isEditing?: boolean;
  isDeleted?: boolean;
  editedAt?: Date;
}

export interface DeletedMessage {
  message: Message;
  index: number;
}
