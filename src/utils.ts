export const delay = (delay: number) => new Promise<void>((res) => setTimeout(() => res(), delay));
