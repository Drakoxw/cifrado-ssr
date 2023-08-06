import { Injectable } from '@angular/core';
import { AppComponent } from '@src/app/app.component';
import { TOKEN_KEY } from '@constants/index';

class LocalStorage implements Storage {
  [name: string]: any;
  readonly length!: number;
  clear(): void {}
  getItem(key: string): string | null {
    return null;
  }
  key(index: number): string | null {
    return null;
  }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService implements Storage {
  private storage: Storage;
  private tokenString: string = '';

  constructor() {
    this.storage = new LocalStorage();

    AppComponent.isBrowser.subscribe((isBrowser) => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }

  [name: string]: any;
  length!: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  getToken(): string {
    if (this.tokenString) {
      return this.tokenString;
    }
    const token = this.getItem(TOKEN_KEY);
    if (token) {
      this.tokenString = token;
      return token;
    }
    return '';
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
