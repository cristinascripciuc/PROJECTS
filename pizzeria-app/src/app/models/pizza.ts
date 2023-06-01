export class Pizza {
  id: number;
  nome: string;
  descrizione: string;
  prezzo: number;
  immagine: string
  constructor(id: number, nome: string, descrizione: string, prezzo: number,immagine: string) {
    this.id = id;
    this.nome = nome;
    this.descrizione = descrizione;
    this.prezzo = prezzo;
    this.immagine = immagine
  }
}

