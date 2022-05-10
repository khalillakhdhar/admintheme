export class Pointage {
  constructor(id, agent, type, dateheur) {
    this.id = id
    this.agent = agent
    this.type = type
    this.dateheur = Date.now()
  }
}
