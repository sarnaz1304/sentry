import {t} from 'sentry/locale';

export const MODULE_TITLE = t('Queues');
export const BASE_URL = 'queues';
export const DATA_TYPE = t('Queue');
export const DATA_TYPE_PLURAL = t('Queues');

export const CHART_HEIGHT = 160;

export const DESTINATION_TITLE = t('Destination Summary');

export const releaseLevelAsBadgeProps = {
  isNew: true,
};

export const DEFAULT_QUERY_FILTER = 'span.op:[queue.process,queue.publish]';
export const CONSUMER_QUERY_FILTER = 'span.op:queue.process';
export const PRODUCER_QUERY_FILTER = 'span.op:queue.publish';

export const TRACE_STATUS_OPTIONS = [
  'ok',
  'cancelled',
  'unknown',
  'unknown_error',
  'invalid_argument',
  'deadline_exceeded',
  'not_found',
  'already_exists',
  'permission_denied',
  'resource_exhausted',
  'failed_precondition',
  'aborted',
  'out_of_range',
  'unimplemented',
  'internal_error',
  'unavailable',
  'data_loss',
  'unauthenticated',
];
export const RETRY_COUNT_OPTIONS = ['0', '1-3', '4+'];

export enum MessageActorType {
  PRODUCER = 'producer',
  CONSUMER = 'consumer',
}

export const MODULE_DESCRIPTION = t(
  'Understand the health and performance impact that queues have on your application and diagnose errors tied to jobs.'
);
export const MODULE_DOC_LINK =
  'https://docs.sentry.io/product/insights/queue-monitoring/';

export const ONBOARDING_CONTENT = {
  title: t('Make sure your jobs complete without errors'),
  description: t(
    'Track the behavior of background jobs at each step in their processing, allowing you to see whether jobs are completing on time and making it easy to debug when they are failing.'
  ),
  link: MODULE_DOC_LINK,
};

export const TABLE_ROWS_LIMIT = 25;
