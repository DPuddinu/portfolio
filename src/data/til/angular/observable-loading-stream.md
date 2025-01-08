---
title: 'Observable with loading state'
slug: observable-to-loading-stream
subject: 'Angular'
description: Convert an Observable to a LoadingState stream.
publishDate: 2025-01-08
tags:
  - angular
---

# **Http call loading state**

Since the Angular HttpClient doesn't provide a way to know if the request is loading or not, we can use an Observable to create a loading state stream.

```typescript
import { catchError, map, Observable, of, startWith } from "rxjs";

export interface Loading {
  state: 'loading';
}

export interface Loaded<T> {
  state: 'loaded';
  data: T;
}

export interface ErrorState {
  state: 'error';
  error: Error;
}

export type LoadingState<T = unknown> = Loading | Loaded<T> | ErrorState;



export function toLoadingStateStream<T>(source$: Observable<T>): Observable<LoadingState<T>> {
  return source$.pipe(
    map(data => ({ state: 'loaded', data }) as Loaded<T>),
    catchError(error => of({ state: 'error', error } as ErrorState)),
    startWith({ state: 'loading' } as Loading)
  );
}

// Usage
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);
  private users$: Observable<LoadingState<User[]>> | undefined;

  getUsers() {
    return this.users$;
  }

  loadUsers() {
    if (!this.users$) {
      this.users$ = toLoadingStateStream<User[]>(
        this.http.get<User[]>('/users')
      );
    }
  }
}

```

