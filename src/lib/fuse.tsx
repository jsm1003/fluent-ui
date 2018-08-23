import React, { Component } from 'react';
import { curry } from 'ramda';

export const wrapper = curry((Wrapper: typeof Component, Target: typeof Component) => {
  class Injector extends Component {
    render() {
      return (
        <Wrapper>
          <Target {...this.props} />
        </Wrapper>
      );
    }
  }

  // copy static properties from original class
  Object.keys(Target).forEach(key => {
    Injector[key] = Target[key];
  });

  return Injector;
});

export const consumer = curry(
  (Consumer: React.ComponentType<React.ConsumerProps<any>>, Target: typeof Component) => {
    class Injector extends Component {
      render() {
        return <Consumer>{context => <Target {...this.props} {...context} />}</Consumer>;
      }
    }

    Object.keys(Target).forEach(key => {
      Injector[key] = Target[key];
    });

    return Injector;
  },
);

// BUG: context API 在 provider中 传递的对象的 get， 在 consumer 中找不到。。。
export const provider = curry(
  (Provider: React.ComponentType<React.ProviderProps<any>>, Target: typeof Component) => {
    class Injector extends Target {
      render() {
        return <Provider value={{ $root: this }}>{super.render()}</Provider>;
      }
    }

    Object.keys(Target).forEach(key => {
      Injector[key] = Target[key];
    });

    return Injector;
  },
);

export const inject = curry(
  (
    Consumer: React.ComponentType<React.ConsumerProps<any>>,
    storeNames: string[],
    Target: typeof Component,
  ) => {
    class Injector extends Component {
      render() {
        return (
          <Consumer>
            {context => {
              const targetContext = {};

              Object.keys(context)
                .filter(item => storeNames.includes(item))
                .forEach(item => {
                  targetContext[item] = context[item];
                });

              return <Target {...targetContext} {...this.props} />;
            }}
          </Consumer>
        );
      }
    }

    Object.keys(Target).forEach(key => {
      Injector[key] = Target[key];
    });

    return Injector;
  },
);
