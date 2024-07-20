export type Call = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startedAt: Date | null;
  endedAt: Date | null;
  status?: "Option1" | null;
  caller: string | null;
  receiver: string | null;
};
