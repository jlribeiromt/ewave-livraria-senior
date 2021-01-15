import { Injectable, Injector } from "@angular/core";
import { HttpService } from "../shared/http.service";

@Injectable({
  providedIn: "root",
})
export class EmprestimoService extends HttpService {
  constructor(public injector: Injector) {
    super(injector, "emprestimos", "emprestimo");
  }

  public obter() {
    return this.get();
  }

  public obterPorId(aggregateId: string) {
    return this.get(aggregateId);
  }

  public criar(body: any) {
    return this.post(null, body);
  }

  public inativarOuAtivar(aggregateId: string) {
    return this.put(`${aggregateId}/inativar-ou-ativar`, null);
  }
}