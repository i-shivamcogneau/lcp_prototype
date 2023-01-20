import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class JsonProducerService {
    constructor(@InjectQueue('json-queue') private queue: Queue) {}

    async sendJsonObj(jsonObj: object) {
        await this.queue.add('json-job', {
            jsonObj
        });

        return 'maybe added to the queue';
    }
}

