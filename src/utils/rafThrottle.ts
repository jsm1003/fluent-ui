// tslint:disable

/**
 * Throttle with requestAnimationFrame api
 * @param func
 */

export function rafThrottle(func): (...args: any[]) => any {
  const later = (context, args) => () => {
    func.apply(context, args);
  };

  return function(...args: any[]): void {
    window.requestAnimationFrame(later(this, args));
  };
}
