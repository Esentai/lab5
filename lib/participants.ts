export type ParticipantStatus = 'pending' | 'approved' | 'rejected';

export type Participant = {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  format: string;
  tracks: string[];
  accessNeeds: string;
  status: ParticipantStatus;
};

const STORAGE_KEY = 'fes-participants';

export const formatLabels: Record<string, string> = {
  offline: 'Офлайн',
  online: 'Онлайн',
};

export function getParticipants(): Participant[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const participants: Participant[] = saved ? JSON.parse(saved) : [];

    return participants.map((participant) =>
      participant.format === 'online' ? { ...participant, status: 'approved' as const } : participant,
    );
  } catch {
    return [];
  }
}

function saveParticipants(participants: Participant[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}

export function addParticipant(participant: Omit<Participant, 'id' | 'status'>) {
  const newParticipant: Participant = {
    ...participant,
    id: Date.now().toString(),
    status: 'pending',
  };

  saveParticipants([newParticipant, ...getParticipants()]);
}

export function emailExists(email: string): boolean {
  return getParticipants().some((participant) => participant.email.toLowerCase() === email.toLowerCase());
}

export function updateParticipantStatus(id: string, status: ParticipantStatus): Participant[] {
  const updated = getParticipants().map((participant) =>
    participant.id === id ? { ...participant, status } : participant,
  );

  saveParticipants(updated);
  return updated;
}
