// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'checkregpage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/CheckRegPage/reducer'),
          System.import('containers/CheckRegPage/sagas'),
          System.import('containers/CheckRegPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('CheckRegPage', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/check/:state(/:registered)',
      name: 'PostRegPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/PostRegPage/reducer'),
          System.import('containers/PostRegPage/sagas'),
          System.import('containers/PostRegPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('PostRegPage', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/reminders',
      name: 'ReminderPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ReminderPage/reducer'),
          System.import('containers/ReminderPage/sagas'),
          System.import('containers/ReminderPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('ReminderPage', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        System.import('containers/AboutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/privacy',
      name: 'privacy',
      getComponent(nextState, cb) {
        System.import('containers/PrivacyPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/terms',
      name: 'terms',
      getComponent(nextState, cb) {
        System.import('containers/TermsOfServicePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
