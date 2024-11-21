import { Config, Env, Nested } from '@n8n/config';

@Config
class HealthcheckServerConfig {
	@Env('N8N_RUNNERS_SERVER_ENABLED')
	enabled: boolean = false;

	@Env('N8N_RUNNERS_SERVER_HOST')
	host: string = '127.0.0.1';

	@Env('N8N_RUNNERS_SERVER_PORT')
	port: number = 5680;
}

@Config
export class BaseRunnerConfig {
	@Env('N8N_RUNNERS_N8N_URI')
	n8nUri: string = '127.0.0.1:5679';

	@Env('N8N_RUNNERS_GRANT_TOKEN')
	grantToken: string = '';

	@Env('N8N_RUNNERS_MAX_PAYLOAD')
	maxPayloadSize: number = 1024 * 1024 * 1024;

	@Env('N8N_RUNNERS_MAX_CONCURRENCY')
	maxConcurrency: number = 5;

	@Nested
	healthcheckServer!: HealthcheckServerConfig;
}
