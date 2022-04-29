import { Plan } from '../interfaces/plan';

export const usePlan = () => useState<Plan>('plan', () => { return {} as Plan })