// 1000에 1초. 밀리세컨드
export const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));
