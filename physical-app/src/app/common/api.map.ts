import { HttpRequest } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { CustomerByCalls } from "../home/models/customer-by-calls.model";
import { CustomerCall } from "../home/models/customer-call.model";

export class ApiMap {

    public static readonly GetCustomerByCalls: HttpRequest<CustomerByCalls[]> = new HttpRequest<CustomerByCalls[]>(
        "GET",
        environment.apiBase + "/Customer"
    );
    public static readonly GetCustomerCalls: HttpRequest<CustomerCall[]> = new HttpRequest<CustomerCall[]>(
        "GET",
        environment.apiBase + "/Customer"
    );
}