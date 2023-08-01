import { setupWorker } from 'msw';
import { handlers } from './handlers/index.jsx';

export const worker = setupWorker(...handlers);
