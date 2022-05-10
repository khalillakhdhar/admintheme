export class Message {
  constructor(id, date, text, emetteur, recepteur) {
    this.id = id
    this.date = Date.now()
    this.text = text
    this.emetteur = emetteur
    this.recepteur = recepteur
  }
}
