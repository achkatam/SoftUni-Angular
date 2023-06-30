import { Observable, map } from "rxjs";

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1200);
    }, 4000);
  });
  
  // p.then((data) => console.log('promise', data))
  //   .then()
  //   .then();
  
  Promise.resolve(100)
    .then((data) => data * 2)
    .then((data) => console.log('data from promise', data));
  
  // sync analogy Promise
  [1].map((item) => item * 2).map((item) => item * 10);
  
  // sync analogy Observable
  [1, 2, 3, 4, 5].map((item) => item * 2).map((item) => item * 10);
  
  // async analogy Observable
  function interval(intervalValue: number) {
    return new Observable<number>((observer) => {
      // observer.next(1000)
      // observer.next(2000)
      // observer.next(3000)
      // observer.next(4000)
      // observer.next(5000)
      let counter = 1;
      const timer = setInterval(() => {
        observer.next(counter++);
      }, intervalValue);
  
      return () => {
        clearInterval(timer);
      };
    });
  }
  
  const stream$ = interval(3000).pipe(map((item) => item * 2));
  
  setTimeout(() => {
    stream$.subscribe({
      next: (x) => console.log('data', x),
      error: (err) => console.log('error', err),
      complete: () => console.log('Successfully completed!'),
    });
  });
  