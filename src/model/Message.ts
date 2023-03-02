interface Message {
  createdAt: Date;
  id: string;
  message: string;
  nameUser: string;
  room_id: number;
}

export type { Message };
