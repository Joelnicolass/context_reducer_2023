type DBData = any | any[];

class DB {
  private data = new Map<string, DBData>();

  get(key: string) {
    return this.data.get(key);
  }

  set(key: string, value: DBData): void {
    this.data.set(key, value);
  }
}

export const db = new DB();
