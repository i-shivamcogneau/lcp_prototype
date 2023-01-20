import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { AppService } from "./app.service";
import { DataService } from "./data/data.service";
import { ProcessService } from "./process/process.service";

@Processor('json-queue')         //consumes job added to queue or listen for events on the queue
export class JsonConsumer {
    constructor(private readonly appService: AppService,
        private readonly dataService: DataService,
        private readonly processService: ProcessService,
      ) {}

    @Process('json-job')
    async readOperationJob(job:Job<unknown>){
        // console.log("consumer", job.data["jsonObj"]);
        
        const APIS = job.data["jsonObj"]["APIS"];
        const OBJECTS = job.data["jsonObj"]["OBJECTS"];
        const PROCESSES = job.data["jsonObj"]["PROCESSES"];
        
        var apires = "";
        for(var i in APIS){                                     // todo we can change APIS to include both OBJECTS and PROCESSES
            const arr = APIS[i].split(" ");

            if(arr.length != 2){
                return 'bad API';
            }

            var idx = Number(arr[1]) -1;

            switch(arr[0].toUpperCase()) {
                case "ADD":
                apires = apires + await this.dataService.postObj(OBJECTS[idx]);
                break;
                case "UPDATE":
                apires = apires + await this.dataService.putObj(OBJECTS[idx]);
                break;
                case "DELETE":
                apires = apires + await this.dataService.deleteObj(OBJECTS[idx]);
                break;

                default:
                return 'bad API';
            }
        }


        for(var i in PROCESSES){
            const arr = PROCESSES[i].split(" ");
      
            if(arr.length != 3){
              return 'bad API';
            }
      
            switch(arr[0].toUpperCase()) {
              case "ADDITION":
                apires = apires + await this.processService.addJS(arr[1], arr[2]);
                break;
              case "SUBTRACTION":
                apires = apires + await this.processService.subJS(arr[1], arr[2]);
                break;
              case "MULTIPLICATION":
                apires = apires + await this.processService.mulJS(arr[1], arr[2]);
                break;
              case "DIVISION":
                apires = apires + await this.processService.divJS(arr[1], arr[2]);
                break;
      
              default:
                return 'bad API';
            }
        }


        console.log( 'I hope it went well XD\n ' + apires);

        await this.sleep(1000);
    }

    sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
    } 
}
