import axios from "axios";
import { observable, action, makeObservable, runInAction } from "mobx"

class Package {
  data = [];
  constructor() {
    makeObservable(this, {
      data: observable,
      getData: action,
      delete: action,
      add: action,
      getById: action,
      update: action
    })
    this.getData();
  }
  getData() {
    axios.get('https://run.mocky.io/v3/5db391d9-8f54-4826-ac52-6d825806b89e').then((res) => {
      this.data = res.data.map((i, index) => { return { ...i, id: index } });
      console.log(JSON.stringify(this.data))
    }).catch(() => {
    })
  }
  delete(id) {
    this.data = this.data.filter(d => d.id != id);
  }
  add(p) {
    this.data.push(p)
    console.log(JSON.stringify(this.data))
  }
  getById(id) {
    return this.data.find(d => d.id == id)
  }
  update(id) {
    const index = this.data.findIndex((d) => d.id == id)
    this.data[index].collected = true;
    console.log(JSON.stringify(this.data))
  }
}

export default new Package();
